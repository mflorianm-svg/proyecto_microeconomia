interface PDFViewerProps {
  pdfUrl: string;
  documentTitle: string;
}

export default function PDFViewer({ pdfUrl, documentTitle }: PDFViewerProps) {
  return (
    <section aria-labelledby="pdf-heading" className="px-4 md:px-8 py-12">
      <h2
        id="pdf-heading"
        className="font-serif text-2xl md:text-3xl text-text-primary font-semibold mb-6"
      >
        Documento del Proyecto
      </h2>

      <div>
        <object
          data={pdfUrl}
          type="application/pdf"
          aria-label={`Documento PDF: ${documentTitle}`}
          className="w-full h-[400px] md:h-[600px] border border-neutral-divider rounded"
        >
          <p className="p-6 text-text-primary font-sans text-base">
            No fue posible cargar el documento. Por favor{' '}
            <a href={pdfUrl} download className="text-harvard-crimson underline">
              descárgalo aquí
            </a>
            .
          </p>
        </object>
      </div>

      <a
        href={pdfUrl}
        download
        aria-label={`Descargar ${documentTitle} en formato PDF`}
        className="mt-6 inline-flex items-center gap-2 bg-harvard-crimson text-white font-sans font-medium px-6 py-3 rounded min-h-[44px] min-w-[44px] hover:bg-opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvard-crimson focus-visible:ring-offset-2"
      >
        Descargar PDF
      </a>
    </section>
  );
}
