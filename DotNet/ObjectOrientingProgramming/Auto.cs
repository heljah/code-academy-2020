using System;

namespace ObjectOrientingProgramming
{
    public class Auto
    {
        public string Merkki { get; set; }

        public string Malli { get; set; }

        public int Huippunopeus { get; set; }

        public string Väri { get; set; }

        public int Nopeus { get; set; }

        public bool MoottoriKäynnissä { get; set; }

        public void Käynnistä()
        {
            MoottoriKäynnissä = true;
            Console.WriteLine($"Auto {Merkki} {Malli} on käynnissä!");
        }

        public void Sammuta()
        {
            MoottoriKäynnissä = false;
            Console.WriteLine($"Auto {Merkki} {Malli} on sammutettu!");
        }

        public void Kiihdytä()
        {
            Nopeus += 5;
            if (Nopeus >= Huippunopeus)
            {
                Nopeus = Huippunopeus;
            }
            Console.WriteLine("Kiihdytit: nopeus on nyt " + Nopeus + "km/h.");

        }

        public void Jarruta()
        {
            Nopeus -= 5;
            if (Nopeus < 0)
            {
                Nopeus = 0;
            }
            Console.WriteLine("Jarrutit: nopeus on nyt " + Nopeus + "km/h.");
        }
        
    }
}
