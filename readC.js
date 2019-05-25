var fs = require('fs');

fs.readdir('../12_project', 'utf-8', function(err, files){
    console.log(files);

    fs.writeFile('tekst.txt', files, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
});