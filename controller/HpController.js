const ph = {
    nom:(req, res)=>{
        res.render('index');


    },
    about:(req, res)=>{
        res.render('about');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    home:(req, res)=>{
        res.render('home');
    },
    viewall:(req, res)=>{
        res.render('viewall');
    }

    
}

module.exports = ph;