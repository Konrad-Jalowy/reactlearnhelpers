import { DownloadLink } from "./DownloadLink";

function CreateRFC({setUrl, url, words, title}){
    function onCreateClick(e){
        alert("file created");
        var cleanScript = {
          "title": title,
          "words": words 
      };
    
      
    
      var _json = JSON.stringify(cleanScript);
      var blob = new Blob([_json], {type: "application/json"});
      var url  = URL.createObjectURL(blob);
      setUrl(url);
      }
    
    return (
        <>
        <button onClick={onCreateClick}>Create file</button>
        {url !== null && <DownloadLink link={url} name="file1">Download</DownloadLink>}
        </>
    );
};

export {CreateRFC};