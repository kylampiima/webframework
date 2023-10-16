/* GET home page */
const summary = function(req, res){ 
    res.render('summary', {
        title: 'Book Summaries ',
        pageHeader: { 
        title: 'Book Summary', 
        strapline: 'Find great books to read near you!' 
        } 
        }); 
    };
    module.exports = { 
        summary
    };
    