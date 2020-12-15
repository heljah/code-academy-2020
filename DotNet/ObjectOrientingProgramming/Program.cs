using System;

namespace ObjectOrientingProgramming
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World! We have an Auto object!");
            Auto volvo = new Auto() {
                Merkki = "Volvo",
                Malli = "Superior",
                Väri = "Green",
                Huippunopeus = 150
            };

            Auto opel = new Auto();
            opel.Merkki = "Opel";
            opel.Malli = "Astra";
            opel.Huippunopeus = 220;
            opel.Väri = "Grey";

            Console.WriteLine("The autos: " + opel.Merkki + " and " + volvo.Merkki);
            opel.Käynnistä();
            opel.Kiihdytä();
            opel.Kiihdytä();
            opel.Kiihdytä();
            opel.Kiihdytä();
            opel.Jarruta();
            opel.Jarruta();
            opel.Jarruta();
            opel.Jarruta();
            Console.WriteLine("Opel käynnissä: " + opel.MoottoriKäynnissä);
            Console.WriteLine("Opelin nopeus: " + opel.Nopeus);

            volvo.Käynnistä();
            volvo.Kiihdytä();
            volvo.Kiihdytä();
            volvo.Kiihdytä();
            volvo.Jarruta();
            volvo.Jarruta();
            Console.WriteLine("Volvo käynnissä: " + volvo.MoottoriKäynnissä);
            Console.WriteLine("Volvon nopeus: " + volvo.Nopeus);

        }
    }
}