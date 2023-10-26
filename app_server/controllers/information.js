const summary = function(req, res){ 
    res.render('summary', {
        title: 'Book Summaries ',
        pageHeader: { 
        title: 'Book Summary', 
        strapline: 'Find great books to read near you!' 
        }, 
        summary: [{ 
        name: 'Alice in Wonderland',
        author: 'Lewis Carroll',
        pages: 320,
        genre:'Adventure',
        published:1865,
        description:'With the curious, quick-witted Alice at its heart, readers will not only rediscover characters such as the charming White Rabbit, the formidable Queen of Hearts, the Mad Hatter and the grinning Cheshire Cat but will find fresh and wonderful creations of these characters by a true master of his art,; images that will live in our hearts and minds for generations to come.'
        },{ 
        name: 'Lord of the Rings',
        author: 'J. R. R. Tolkien',
        pages: 1216,
        genre:'Fantasy',
        published:1995,
        description:'The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.'
        },{ 
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
        genre:'Romance',
        published:1925,
        description:'The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted in was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.'
        }]
            
        }); 
    };
    module.exports = { 
        summary
    };
    