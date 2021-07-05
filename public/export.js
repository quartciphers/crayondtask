const exportButton = document.getElementById('button');

exportButton.addEventListener('click',()=>{
    var val = htmlToPdfmake("your html code here");
    var dd = {content:val};
    pdfMake.createPdf(dd).download();
    
})