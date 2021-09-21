var fs = require("fs"); // stands for file system

fs.mkdirSync("New_Folder"); // system command mkdir

fs.writeFileSync(
  "New_Folder/New_File.txt",
  "Created new file using Node JS",
  (err) => {
    // (dir,content,error function)
    if (err) console.log(err);
  }
);

fs.appendFileSync("New_Folder/New_File.txt", "Appended data using Node JS");

console.log(fs.readFileSync("New_Folder/New_File.txt"));
console.log(fs.readFileSync("New_Folder/New_File.txt", "utf-8"));

fs.renameSync("New_Folder/New_File.txt", "New_Folder/Renamed_File.txt");

// fs.unlinkSync("New_Folder/Renamed_File.txt"); to delete the new file

// fs.rmdirSync("New_Folder"); to delete the new Folder
