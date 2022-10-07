const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(title ,category , texte , imageUrl , date) {
            super();
            this.Title = title !== undefined ? title : "";
            this.Category = category !== undefined ? category : "";
            this.Texte = texte!== undefined ? category : "";
            this.ImageUrl = imageUrl !== undefined ? category : "";
            this.Date = date !== undefined ? category : "";
            
            this.setKey("Title");
            this.addValidator('Title', 'string');
            this.addValidator('Category', 'string');
            this.addValidator('Texte', 'string');
            this.addValidator('Category', 'string');
            this.addValidator('ImageUrl', 'url');
            this.addValidator('Date', 'string');
        }
    }