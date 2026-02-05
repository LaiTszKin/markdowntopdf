import html2pdf from 'html2pdf.js';

export const generatePdf = (element: HTMLElement, filename: string): Promise<void> => {
  const opt = {
    margin: [15, 15, 15, 15] as [number, number, number, number],
    filename: `${filename}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
  };

  return html2pdf().set(opt).from(element).save();
};
