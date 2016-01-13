using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CarrollUniversityWebApp.Models;

namespace CarrollUniversityWebApp.Controllers
{
    public class ProfessorController : ApiController
    {
        // POST api/professor
        [HttpPost]
        public void Post([FromBody]ProfessorModel value)
        {
        }

        // GET api/course
        [HttpGet]
        public ProfessorModel[] Get()
        {
            var professor1 = new ProfessorModel { professorName = "Kayla Topper", userName = "ktopper", password = "Gator1014:)" };
            var professor2 = new ProfessorModel { professorName = "Bob Smith", userName = "bsmith", password = "bsmith11" };

            var professors = new ProfessorModel[] { professor1, professor2 };

            return professors;

        }
    }
}
