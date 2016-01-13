using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CarrollUniversityWebApp.Models;

namespace CarrollUniversityWebApp.Controllers
{
    public class CourseController : ApiController
    {


        // POST api/course
        [HttpPost]
        public void Post([FromBody]CourseModel value)
        {
        }

        // GET api/course
        [HttpGet]
        public CourseModel[] Get()
        {
            var course1 = new CourseModel { courseName = "Chemistry", professorName = "Kayla Topper" };
            var course2 = new CourseModel { courseName = "Chemistry 2", professorName = "Kayla Topper" };

            var courses = new CourseModel[] { course1, course2 };

            return courses;
        }
    }
}
