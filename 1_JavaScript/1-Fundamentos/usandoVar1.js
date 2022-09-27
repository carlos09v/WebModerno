{
    {
        {
            {
                {
                    var sera = 'Será???' // Escopo global
                    console.log(sera)
                    // Fuja do escopa global
                }
            }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123 // Escopo local - function
    console.log(local)
}

teste()
console.log(local) // Error - is not defined
