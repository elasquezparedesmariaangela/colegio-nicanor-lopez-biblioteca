import React, { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import Controls from './Controls';
import RecentFiles from './RecentFiles';
import reactbook from '../assets/pdfs/React-Hook.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Pdfreader(props) {
  const [numPages, setNumPages] = useState(null);
  const [pdfFile, setPdfFile] = useState(props.location.state.book);
  const [pageNumber, setPageNumber] = useState(1);
  const [rotatedoc, setRotatedoc] = useState(0);

  useEffect(() => {
    setPageNumber(1);
  }, [pdfFile])


  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }
  console.log(props)
  return (
    <>
      {pdfFile ?
        <Controls numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          fileName={pdfFile.name}
          setRotatedoc={setRotatedoc}
          rotatedoc={rotatedoc}
        /> : <></>}
      <br></br>

      {/* main page */}
      <div className="row">
        <div className="col s12 m9">
          <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", position: "relative", overflow: "hidden" }}>
            <Document
              file={pdfFile.file}
              onLoadSuccess={onDocumentLoadSuccess}
              style={{ positon: "absolute", width: "fit-content", height: "fit-content" }}
              rotate={rotatedoc}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>
    </>
  )
}
