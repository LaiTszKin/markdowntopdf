import html2pdf from 'html2pdf.js';

type SavePickerOptions = {
  suggestedName?: string;
  types?: Array<{
    description?: string;
    accept: Record<string, string[]>;
  }>;
};

type SavePickerFn = (options?: SavePickerOptions) => Promise<FileSystemFileHandle>;

type WindowWithSavePicker = Window & {
  showSaveFilePicker?: SavePickerFn;
};

const buildPdfOptions = (filename: string) => ({
  margin: [15, 15, 15, 15] as [number, number, number, number],
  filename: `${filename}.pdf`,
  image: { type: 'jpeg' as const, quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
});

const isAbortError = (error: unknown): boolean =>
  error instanceof DOMException && error.name === 'AbortError';

const isSecurityError = (error: unknown): boolean =>
  error instanceof DOMException && error.name === 'SecurityError';

const createPdfBlob = (element: HTMLElement, filename: string): Promise<Blob> => {
  const options = buildPdfOptions(filename);
  return html2pdf().set(options).from(element).outputPdf('blob') as Promise<Blob>;
};

const downloadPdf = (element: HTMLElement, filename: string): Promise<void> => {
  const options = buildPdfOptions(filename);
  return html2pdf().set(options).from(element).save();
};

export const generatePdf = async (element: HTMLElement, filename: string): Promise<void> => {
  const saveFilePicker = (window as WindowWithSavePicker).showSaveFilePicker;

  if (!saveFilePicker) {
    await downloadPdf(element, filename);
    return;
  }

  let fileHandle: FileSystemFileHandle;

  try {
    fileHandle = await saveFilePicker({
      suggestedName: `${filename}.pdf`,
      types: [
        {
          description: 'PDF 文件',
          accept: { 'application/pdf': ['.pdf'] },
        },
      ],
    });
  } catch (error) {
    if (isAbortError(error)) {
      return;
    }

    if (isSecurityError(error)) {
      await downloadPdf(element, filename);
      return;
    }

    throw error;
  }

  const pdfBlob = await createPdfBlob(element, filename);
  const writable = await fileHandle.createWritable();
  await writable.write(pdfBlob);
  await writable.close();
};
