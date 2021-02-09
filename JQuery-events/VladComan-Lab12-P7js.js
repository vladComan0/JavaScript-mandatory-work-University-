$(document).ready(function() {
    var text = '{"angajati":[' +
            '{"IdAngajat":1,"Nume":"N1","Prenume":"P1","Marca":1,"DataNasterii":"1955-10-15","DataAngajarii":"2005-10-15","Adresa_jud":"Bucuresti","IdFunctie":1,"IdDept":1},' +
            '{"IdAngajat":2,"Nume":"N2","Prenume":"P2","Marca":2,"DataNasterii":"1958-10-20","DataAngajarii":"2006-10-15","Adresa_jud":"Bihor","IdFunctie":2,"IdDept":2},' +
            '{"IdAngajat":3,"Nume":"N3","Prenume":"P3","Marca":3,"DataNasterii":"1963-07-25","DataAngajarii":"2009-07-17","Adresa_jud":"Ilfov","IdFunctie":2,"IdDept":3},' +
            '{"IdAngajat":4,"Nume":"N4","Prenume":"P4","Marca":4,"DataNasterii":"1958-01-01","DataAngajarii":"2006-12-31","Adresa_jud":"Cluj","IdFunctie":2,"IdDept":4},' +
            '{"IdAngajat":5,"Nume":"N5","Prenume":"P5","Marca":5,"DataNasterii":"1962-02-15","DataAngajarii":"2007-12-12","Adresa_jud":"Cluj","IdFunctie":2,"IdDept":5},' +
            '{"IdAngajat":6,"Nume":"N6","Prenume":"P6","Marca":6,"DataNasterii":"1964-05-05","DataAngajarii":"2008-05-06","Adresa_jud":"Arad","IdFunctie":2,"IdDept":6},' +
            '{"IdAngajat":7,"Nume":"N7","Prenume":"P7","Marca":7,"DataNasterii":"1975-08-12","DataAngajarii":"2010-09-16","Adresa_jud":"Cluj","IdFunctie":3,"IdDept":2},' +
            '{"IdAngajat":8,"Nume":"N8","Prenume":"P8","Marca":8,"DataNasterii":"1977-05-10","DataAngajarii":"2011-08-26","Adresa_jud":"Galati","IdFunctie":6,"IdDept":2},' +
            '{"IdAngajat":9,"Nume":"N9","Prenume":"P9","Marca":9,"DataNasterii":"1975-07-17","DataAngajarii":"2010-12-12","Adresa_jud":"Vaslui","IdFunctie":9,"IdDept":2},' + 
            '{"IdAngajat":10,"Nume":"N10","Prenume":"P10","Marca":10,"DataNasterii":"1985-09-09","DataAngajarii":"2012-05-30","Adresa_jud":"Bucuresti","IdFunctie":9,"IdDept":2},' +
            '{"IdAngajat":11,"Nume":"N11","Prenume":"P9","Marca":11,"DataNasterii":"1976-07-17","DataAngajarii":"2014-12-12","Adresa_jud":"Cluj","IdFunctie":3,"IdDept":3},' +
            '{"IdAngajat":12,"Nume":"N12","Prenume":"P2","Marca":12,"DataNasterii":"1981-09-09","DataAngajarii":"2015-05-30","Adresa_jud":"Cluj","IdFunctie":3,"IdDept":3},' +
            '{"IdAngajat":13,"Nume":"N13","Prenume":"P9","Marca":13,"DataNasterii":"1979-07-17","DataAngajarii":"2014-12-12","Adresa_jud":"Cluj","IdFunctie":5,"IdDept":4},' +
            '{"IdAngajat":14,"Nume":"N12","Prenume":"P13","Marca":14,"DataNasterii":"1980-09-09","DataAngajarii":"2015-05-30","Adresa_jud":"Cluj","IdFunctie":5,"IdDept":4},' +
            '{"IdAngajat":15,"Nume":"N8","Prenume":"P5","Marca":15,"DataNasterii":"1983-07-17","DataAngajarii":"2016-12-12","Adresa_jud":"Bihor","IdFunctie":5,"IdDept":4},' +
            '{"IdAngajat":16,"Nume":"N16","Prenume":"P1","Marca":16,"DataNasterii":"1980-03-17","DataAngajarii":"2013-01-12","Adresa_jud":"Cluj","IdFunctie":4,"IdDept":5},' +
            '{"IdAngajat":17,"Nume":"N12","Prenume":"P15","Marca":17,"DataNasterii":"1981-03-17","DataAngajarii":"2014-01-12","Adresa_jud":"Cluj","IdFunctie":4,"IdDept":6},' +
            '{"IdAngajat":18,"Nume":"N22","Prenume":"P38","Marca":18,"DataNasterii":"1995-10-15","DataAngajarii":"2016-10-15","Adresa_jud":"Bucuresti","IdFunctie":7,"IdDept":1}]}';
    ang = $.parseJSON(text);
    $("#result").html("Angajatii sunt: <br>")
    for (crt_ang of ang.angajati)
        $("#result").html($("#result").html() + crt_ang.Nume + " " + crt_ang.Prenume + " " + crt_ang.Adresa_jud + " " + crt_ang.DataAngajarii + "<br>");
    $("#result").html($("#result").html() + "<br><br>Angajatii din Cluj cu vechime mai mare de un an: <br>")
    for (crt_ang of ang.angajati) {
        var date = new Date(crt_ang.DataAngajarii);
        if (crt_ang.Adresa_jud == "Cluj" && date.getFullYear() <= 2019)
            $("#result").html($("#result").html() + crt_ang.Nume + " " + crt_ang.Prenume + " " + crt_ang.Adresa_jud + " " + crt_ang.DataAngajarii + "<br>");
    }
})