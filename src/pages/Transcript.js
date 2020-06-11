import React, {useState} from 'react';
import me from "../img/me.jpg";
import Box from "@material-ui/core/Box";
import transcript from '../docs/transcript.pdf';
import { Document, Page, pdfjs} from "react-pdf";
import Button from "@material-ui/core/Button";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Transcript = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div>
            <div style={boxStyle}>
                <Box
                    width="100%"
                    container="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems='center'
                >
                    <Document
                        file={transcript}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} scale={2.0}/>
                    </Document>
                    <div>
                        <p>
                            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                        </p>
                        <Button
                            type="button"
                            disabled={pageNumber <= 1}
                            onClick={previousPage}
                        >
                            Previous
                        </Button>
                        <Button
                            type="button"
                            disabled={pageNumber >= numPages}
                            onClick={nextPage}
                        >
                            Next
                        </Button>
                    </div>
                </Box>
            </div>
        </div>
    );
};

const boxStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection:"column",
    justifyContent:"center",
    marginTop: "1%",
};

export default Transcript;
