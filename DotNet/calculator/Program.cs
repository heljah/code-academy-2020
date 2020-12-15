using System;

namespace calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter your first number:");
            int first = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter your second number:");
            int second = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Here you go: " + (first + second));
        }
    }
}
