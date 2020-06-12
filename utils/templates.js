const showdown = require("showdown");
const converter = new showdown.Converter();

const template1 = (data) => {
    let body = `
    <body class="boxed">
        <center>
            <h1>${data.firstname} ${data.lastname}</h1>
            <h4 class="light m-m-t-10" style="color:grey; padding-top:5px">
                ${Object.keys(data.contact)
            .map(function(key, index) {
              return ` 
                <span class="" >${data.contact[key]}</span>`;
            })
            .join(" •")}
            </h4>
        </center>
    
        <hr class="thick">
        <h4 class="">TECHNICAL SKILLS</h4>
        <div class="offset-2">
            ${data.skills.details
          .map(function(key) {
            return `
            <p>
                <strong>${key.type}:</strong> ${key.items
              .map(function(key) {
                return `${key}`;
              })
              .join(", ")}`;
          })
          .join("</p>")}
            </div>
        <h4 class="">PERSONAL PROJECTS</h4>
        <div class="offset-2">
    
    
            ${data.github_projects.items
          .map(function(key) {
            return `
            <p>
                <strong class="title">${
            key["project_name"]
          } ${converter.makeHtml(key["tagline"]).replace(/<(\/)?p([^>]*)>/g, "")}
                </strong>
            </p>
            <div class="offset-2 p"> ${key["description"][0]} Technologies: ${key[
              "technology_used"
            ].tools
              .map(function(item) {
                return item;
              })
              .join(", ")}
            </div> `;
          })
          .join("")}
    
    
        </div>
        <h4 class="">OTHER PROJECTS</h4>
    
        ${data.other_projects.items
        .map(function(key) {
          return `<div class="offset-2">
        <p>
            <strong class="title">${key["headline"]}</strong>
        </p>
        <div class="offset-2 p"> ${key["points"][0]} Technologies: ${key[
            "technology_used"
          ].tools
            .map(function(item) {
              return item;
            })
            .join(", ")}
        </div></div>`;
        })
        .join("")}
        <h4 class="">PROFESSIONAL EXPERIENCE</h4>
        <div class="offset-2">
            <p>
                <strong class="title">${data.work_experience.items.map(function(key) {
            return `${key["title"]}, ${key["organisation"]}, ${key["location"]}</b>
                    <span class="pull-right">${key["from"]} - ${key["to"]}</span>
                </strong>
            </p>
            <div class="offset-2 p">${key["details"][0]} Technologies: ${key[
              "technology_used"
            ].tools
              .map(function(item) {
                return item;
              })
              .join(", ")}
            </div>
        </div>`;
          })}
    
    
        <h4 class="">INVOLVEMENTS</h4>
        <div class="">
            <ul class="boxed-list offset-2 p">
                ${data.involvement.organizations.map(function(key) {
            return `
                <li class="offset-2" style="text-decoration-style:disc"> ${key} </li>`;
          })}
            </ul>
        </div>
        <h4 class="">EDUCATION</h4>
        <div class="">
            <table cellpadding="10" style="width:100%">
                <thead>
    
                    <tr>
                        <th>Degree</th>
                        <th>Major</th>
                        <th>Institution</th>
                        <th>graduation Year</th>
                    </tr>
                </thead>
                <tbody>
    
                    <tr>
                        ${data.education.schools.map(function(key) {
                return `
                        <td>${key["degree"]}</td>
                        <td>${key["major"]}</td>
                        <td>${key["institution"]}</td>
                        <td>${key["graduation_year"]}</td>
    
                        `;
              })}
                    </tr>
                </tbody>
    
    
            </table>
        </div>
        <h4 class="">RESEARCH EXPERIENCE</h4>
        
        ${data.research_experience.items
          .map(function(key) {
            return `<div class="offset-2">
        <p>
            <strong class="title">${key["title"]}- ${key["organisation"]}</strong>
        </p>
        <div class="offset-2 p"> ${key["points"][0]}
        </div></div>`;
          })
          .join("")}
    
    </body>
    `;
    return body
}

const template2 = (data) => {
    let body = `
    <body class="boxed">
    <div class="main">
        <div class="left_bar">
            <h1>JOHN JAMES DOE</h1>
            <h4 class="light" style="color:grey; padding-top:5px">favourdemo@gmail.com • (870) 949-0000 •
                www.favourori.github.io • linkedin.com/in/favourori/ •github.com/orifavour</h4>
            <h4 class="h4">TECHNICAL SKILLS</h4>
            <div class="offset-2">
                <p class="p-ma">
                    <strong>Programming language: </strong>Java, Swift, Python, Javascript, PHP, Ruby, Rails
                </p>
                <p class="p-ma">
                    <strong>Programming language: </strong>Java, Swift, Python, Javascript, PHP, Ruby, Rails
                </p>
                <p class="p-ma">
                    <strong>Programming language: </strong>Java, Swift, Python, Javascript, PHP, Ruby, Rails
                </p>
                <p class="p-ma">
                    <strong>Programming language: </strong>Java, Swift, Python, Javascript, PHP, Ruby, Rails
                </p>
            </div>
            <h4 class="h4">PERSONAL PROJECTS</h4>
            <div class="offset-2">
                <div class="p-ma">
                    <p>
                        <strong class="title">Bethel Church (App Backend) iOS App Admin</strong>
                    </p>
                    <div class="offset-2 p">
                        Desktop App (developed in Java) for managing & controlling the content of Bethel's Mobile
                        AppTechnologies: Java, PHP, MySQL
                    </div>
                </div>
                <div class="p-ma">
                    <p>
                        <strong class="title">Bethel Church (App Backend) iOS App Admin</strong>
                    </p>
                    <div class="offset-2 p">
                        Desktop App (developed in Java) for managing & controlling the content of Bethel's Mobile
                        AppTechnologies: Java, PHP, MySQL
                    </div>
                </div>
            </div>
        </div>
        <div class="right_bar">
            <h4 class="h4">OTHER PROJECTS</h4>
            <div class="offset-2">
                <div class="p-ma">
                    <p>
                        <strong class="title">iOS App – Bethel Church, Magnolia</strong>
                    <div class="offset-2 p">
                        Designed an iOS app for Bethel Church, to reduce printing of bulletins, and to let members
                        havedirect access to podcasts, upcoming events etc. Technologies: Swift, MySQL,PHP
                    </div>
                    </p>
                </div>
                <div class="p-ma">
                    <p>
                        <strong class="title">iOS App – Bethel Church, Magnolia</strong>
                    <div class="offset-2 p">
                        Designed an iOS app for Bethel Church, to reduce printing of bulletins, and to let members
                        havedirect access to podcasts, upcoming events etc. Technologies: Swift, MySQL,PHP
                    </div>
                    </p>
                </div>
            </div>
            <h4 class="h4">PROFESSIONAL EXPERIENCE</h4>
            <div class="offset-2">
                Software Developer, Southern Arkansas University, Magnolia, AR
            </div>
            <h4 class="h4">INVOLVEMENTS</h4>
            <div>
                <ul class="boxed-list offset-2 p">
                    <li class="offset-2" style="text-decoration-style:disc">
                        Volunteer, Magnolia Blossom, OCT 201
                    </li>
                </ul>
            </div>
        </div>

        <!-- Education and research -->
        <div style="width: 100%; float: left;" class="h4">EDUCATION</div>
        <div class="">
            <table cellpadding="10" style="width:100%">
                <thead>
                    <tr>
                        <th>Degree</th>
                        <th>Major</th>
                        <th>Institution</th>
                        <th>graduation Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bachelor of Science</td>
                        <td>Computer Science</td>
                        <td>Southern Arkansas University</td>
                        <td>2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h4 class="h4">RESEARCH</h4>
            <div class="p-ma mar">
                <p>
                    <strong class="title">Web Hacking- National Collegiate Honors Council</strong>
                </p>
                <div class="offset-2 p">
                    Implemented encryption methods (MD5 and SHA-1)to secure a previously unsecure Web
                </div>
            </div>
    </div>
</body>

    `;
    return body
}

module.exports = {
    template1, template2
}