export const convertCSVToJson = (csvData:any) => {
    const lines = csvData.split("\n");
    const headers:any = lines[0].split(",");
    const result = [];
  
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",");
  
    //   for (let j:any = 0; j < headers.length; j++) {
    //     obj?[headers[j].trim()] = currentLine[j].trim();
    //   }
  
      result.push(obj);
    }
  
    return result;
  };