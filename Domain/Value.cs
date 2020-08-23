using System;

namespace Domain
{
    public class Value
    {
        //auto implemented properties; no additional logic required
        //Id will automatically be the primary key due to its name
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
