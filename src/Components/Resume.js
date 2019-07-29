import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })    
     
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
         </div>

         <div className="nine columns main-col">

              <ul>
                <li>MCSD: Developing ASP.NET MVC 4 Applications - 2013</li>
                <li>MCTS: Microsoft .NET Framework 3.5 Windows Forms Applications - 2010</li>
                <li>MCTS: Microsoft .NET Framework 2.0 Web-based Client Development - 2008</li>
                <li>MCTS: Microsoft Office Sharepoint Server 2007 Application Development - 2008</li>
                <li>MCP: Designing &amp; Implementing Distributed Applications (VB6) - 2002</li>
              </ul>

          </div>
      </div>


      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Honors/Awards</span></h1>
         </div>

         <div className="nine columns main-col">

              <ul>
                <li>Austin FLEX user group meetings (2010-2012)</li>
                <li>Austin .NET user group meetings (2009-present)</li>
                <li>Deans Honor Roll (Summer 2000)</li>
                <li>Visual C++ Tutor for Baylor MIS students</li>
                <li>OOP Tutor for Baylor MIS students</li>
                <li>Oracle PL/SQL teacher’s aid</li>
                <li>Participated in regional programming contest at Tarleton State Univ.</li>
                <li>50+ programming/language books</li>
                <li>HIPAA certified</li>
                <li>Microsoft Certified Professional (MCP)</li>
                <li>Microsoft Certified Technology Specialist (MCTS)</li>
                <li>Microsoft Visual Studio ALM course certificate (2013)</li>
                <li>Center For Digital Government’s “Best of Texas Award” – Best Business Analysis/Data Analytics
                Project 2018</li>
                <li>Center For Digital Government’s “Best of Texas Award” – Best Application Serving the Public 2017</li>
                <li>Recognition from the Texas Department of Information Resources (DIR)’s Biennial Performance
                Report for completing technology goals of the State Strategic Plan initiative, for improving
                effectiveness and cost efficiency of the state of Texas information resources (Nov 2018).</li>
              </ul>

          </div>
      </div>

   </section>
    );
  }
}

export default Resume;
