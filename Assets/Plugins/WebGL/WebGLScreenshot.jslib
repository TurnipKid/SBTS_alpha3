mergeInto(LibraryManager.library, {
  DownloadFile: function (dataPtr, dataLength, fileNamePtr) {
    var bytes = new Uint8Array(Module.HEAPU8.buffer, dataPtr, dataLength);
    var fileName = UTF8ToString(fileNamePtr);

    var blob = new Blob([bytes], { type: "image/png" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
