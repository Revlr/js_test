// function saveToFile_Chrome(fileName, content) {
//     var blob = new Blob([content], { type: 'text/plain' });
//     var objURL = window.URL.createObjectURL(blob);
            
//     // 이전에 생성된 메모리 해제
//     if (window.__Xr_objURL_forCreatingFile__) {
//         window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
//     }
//     window.__Xr_objURL_forCreatingFile__ = objURL;
//     var a = document.createElement('a');
//     a.download = fileName;
//     a.href = objURL;
//     a.click();
// }

// saveToFile_Chrome("~/js_test/3/proj/todolist/show.txt", "asdf");

//이건 ㄹㅇ 파일 저장이었음;;

var blob = new Blob(["test"]);
window.navigator.msSaveBlob(blob, "testFile.txt");
var fileData = ["test data test data"];
blob = new Blob(fileData);
window.navigator.msSaveOrOpenBlob(blob, "testFile2.txt");