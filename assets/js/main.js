
document.addEventListener('DOMContentLoaded', function () {
  // Seu código JavaScript aqui

  const dataPerfil = [
    {
      imgSrc: './assets/images/nath/capa.jpg',
      perfilImgSrc: './assets/images/nath/nathimg.jpg',
      nome: 'Natanaele Balica',
      profissao: 'Desenvolvedora de software',
      descricao: 'Sou uma engenheira e desenvolvedora de software com experiência em desenvolvimento back-end. Durante meu estágio como desenvolvedora, tive a oportunidade de conhecer e me interessar pela área de computação em nuvem.',
      linkedin: 'https://www.linkedin.com/in/natanaelebalica/',
      github: 'https://github.com/nathbalica'
    },
    {
      imgSrc: './assets/images/integrantes/capa.jpeg',
      perfilImgSrc: './assets/images/integrantes/int.jpg',
      nome: 'Mary Smith',
      profissao: 'Desenvolvedora front-end',
      descricao: 'Sou uma designer gráfica e desenvolvedora front-end. Tenho paixão por criar interfaces intuitivas e atraentes. Minha experiência abrange design de logotipos, identidade visual, UI/UX e codificação.',
      linkedin: 'https://www.linkedin.com/in/marysmith/',
      github: 'https://github.com/marysmith'
    },
    {
      imgSrc: './assets/images/integrantes/capa3.jpg',
      perfilImgSrc: './assets/images/integrantes/int3.jpeg',
      nome: 'John Doe',
      profissao: 'Desenvolvedor web',
      descricao: 'Sou um desenvolvedor web com experiência em front-end e back-end. Trabalhei em diversos projetos, desde sites institucionais até aplicações web complexas. Estou sempre buscando aprender e aprimorar minhas habilidades.',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
      github: 'https://github.com/johndoe'
    },
    {
      imgSrc: './assets/images/integrantes/capa4.jpg',
      perfilImgSrc: './assets/images/integrantes/int4.jpg',
      nome: 'Pedro Souza',
      profissao: 'Designer gráfico',
      descricao: 'Sou uma designer gráfica e desenvolvedora front-end. Tenho paixão por criar interfaces intuitivas e atraentes. Minha experiência abrange design de logotipos, identidade visual, UI/UX e codificação.',
      linkedin: 'https://www.linkedin.com/in/marysmith/',
      github: 'https://github.com/marysmith'
    },
    {
      imgSrc: './assets/images/integrantes/capa5.jpg',
      perfilImgSrc: './assets/images/integrantes/int5.jpg',
      nome: 'Gabriel Carvalho',
      profissao: 'Desenvolvedor',
      descricao: 'Sou uma designer gráfica e desenvolvedora front-end. Tenho paixão por criar interfaces intuitivas e atraentes. Minha experiência abrange design de logotipos, identidade visual, UI/UX e codificação.',
      linkedin: 'https://www.linkedin.com/in/marysmith/',
      github: 'https://github.com/marysmith'
    }
    // Adicione mais objetos para mais containers aqui
  ];


  const dataSidebar = [
    {
      imgSrc: './assets/images/nath/capa.jpg',
      perfilImgSrc: './assets/images/nath/nathimg.jpg',
      nome: 'Natanaele Balica',
      profissao: 'Desenvolvedora de software',
      descricao: "I'm a web designer for Fiserv, specializing in web design, graphic design, and UX.",
      telefone: '123-456-7890',
      endereco: 'Provo, Utah',
      email: 'astronaomical@gmail.com',
      website: 'http://astronaomical.com/',
      instagram: 'https://www.instagram.com/astronaomical/',
      github: 'https://www.pinterest.com/astronaomical/',
      linkedin: 'https://www.linkedin.com/in/naomi-weatherford-758385112/'
    },
    {
      imgSrc: './assets/images/integrantes/capa.jpeg',
      perfilImgSrc: './assets/images/integrantes/int.jpg',
      nome: 'Mary Smith',
      profissao: 'Desenvolvedora front-end',
      descricao: 'Sou uma designer gráfica e desenvolvedora front-end. Tenho paixão por criar interfaces intuitivas e atraentes. Minha experiência abrange design de logotipos, identidade visual, UI/UX e codificação.',
      telefone: '123-456-7890',
      endereco: 'Provo, Utah',
      email: 'astronaomical@gmail.com',
      website: 'http://astronaomical.com/',
      instagram: 'https://www.instagram.com/astronaomical/',
      github: 'https://www.pinterest.com/astronaomical/',
      linkedin: 'https://www.linkedin.com/in/naomi-weatherford-758385112/'
    },
    {
      imgSrc: './assets/images/nath/capa.jpg',
      perfilImgSrc: './assets/images/nath/nathimg.jpg',
      nome: 'Natanaele Balica',
      profissao: 'Desenvolvedora de software',
      descricao: "I'm a web designer for Fiserv, specializing in web design, graphic design, and UX.",
      telefone: '123-456-7890',
      endereco: 'Provo, Utah',
      email: 'astronaomical@gmail.com',
      website: 'http://astronaomical.com/',
      instagram: 'https://www.instagram.com/astronaomical/',
      github: 'https://www.pinterest.com/astronaomical/',
      linkedin: 'https://www.linkedin.com/in/naomi-weatherford-758385112/'
    },
    {
      imgSrc: './assets/images/nath/capa.jpg',
      perfilImgSrc: './assets/images/nath/nathimg.jpg',
      nome: 'Natanaele Balica',
      profissao: 'Desenvolvedora de software',
      descricao: "I'm a web designer for Fiserv, specializing in web design, graphic design, and UX.",
      telefone: '123-456-7890',
      endereco: 'Provo, Utah',
      email: 'astronaomical@gmail.com',
      website: 'http://astronaomical.com/',
      instagram: 'https://www.instagram.com/astronaomical/',
      github: 'https://www.pinterest.com/astronaomical/',
      linkedin: 'https://www.linkedin.com/in/naomi-weatherford-758385112/'
    },
    {
      imgSrc: './assets/images/nath/capa.jpg',
      perfilImgSrc: './assets/images/nath/nathimg.jpg',
      nome: 'Natanaele Balica',
      profissao: 'Desenvolvedora de software',
      descricao: "I'm a web designer for Fiserv, specializing in web design, graphic design, and UX.",
      telefone: '123-456-7890',
      endereco: 'Provo, Utah',
      email: 'astronaomical@gmail.com',
      website: 'http://astronaomical.com/',
      instagram: 'https://www.instagram.com/astronaomical/',
      github: 'https://www.pinterest.com/astronaomical/',
      linkedin: 'https://www.linkedin.com/in/naomi-weatherford-758385112/'
    }
    // Adicione mais objetos para mais perfis aqui
  ];

  const cvData = [
    {
      experience: [
        {
          position: "Technical Consultant - Web Design",
          company: "Fiserv",
          date: "Apr 2018 - Now"
        },
        {
          position: "Web Designer",
          company: "Lynden",
          date: "Jan 2018 - Apr 2018"
        },
        {
          position: "Intern - Web Design",
          company: "Lynden",
          date: "Aug 2017 - Dec 2017"
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Web Design and Development",
          institution: "BYU-Idaho",
          date: "Jan. 2016 - Apr. 2018"
        },
        {
          degree: "Computer Science",
          institution: "Edmonds Community College",
          date: "Sept. 2014 - Dec. 2015"
        },
        {
          degree: "High School",
          institution: "Henry M. Jackson High School",
          date: "Jan. 2013 - Jun. 2015"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "CSS3 & SCSS",
          percent: 90
        },
        {
          name: "JavaScript",
          percent: 60
        },
        {
          name: "jQuery",
          percent: 50
        },
        {
          name: "JSON",
          percent: 40
        },
        {
          name: "PHP",
          percent: 55
        },
        {
          name: "MySQL",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Illustrator"
        },
        {
          name: "Photoshop"
        },
        {
          name: "InDesign"
        },
        {
          name: "Dreamweaver"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-dumbbell",
          name: "Academia"
        },
        {
          iconClass: "art",
          icon: "fas fa-book",
          name: "Books"
        },
        {
          iconClass: "movies",
          icon: "fas fa-film",
          name: "Movies"
        },
        {
          iconClass: "music",
          icon: "fas fa-headphones",
          name: "Music"
        },
        {
          iconClass: "games",
          icon: "fas fa-gamepad",
          name: "Games"
        }
      ],
      pdfPath: "./assets/curriculo1.pdf"
    },
    {
      experience: [
        {
          position: "Technical Consultant - Web Design",
          company: "Fiserv",
          date: "Apr 2018 - Now"
        },
        {
          position: "Web Designer",
          company: "Lynden",
          date: "Jan 2018 - Apr 2018"
        },
        {
          position: "Intern - Web Design",
          company: "Lynden",
          date: "Aug 2017 - Dec 2017"
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Web Design and Development",
          institution: "BYU-Idaho",
          date: "Jan. 2016 - Apr. 2018"
        },
        {
          degree: "Computer Science",
          institution: "Edmonds Community College",
          date: "Sept. 2014 - Dec. 2015"
        },
        {
          degree: "High School",
          institution: "Henry M. Jackson High School",
          date: "Jan. 2013 - Jun. 2015"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "CSS3 & SCSS",
          percent: 90
        },
        {
          name: "JavaScript",
          percent: 60
        },
        {
          name: "jQuery",
          percent: 50
        },
        {
          name: "JSON",
          percent: 40
        },
        {
          name: "PHP",
          percent: 55
        },
        {
          name: "MySQL",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Illustrator"
        },
        {
          name: "Photoshop"
        },
        {
          name: "InDesign"
        },
        {
          name: "Dreamweaver"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-dumbbell",
          name: "Academia"
        },
        {
          iconClass: "art",
          icon: "fas fa-book",
          name: "Books"
        },
        {
          iconClass: "movies",
          icon: "fas fa-film",
          name: "Movies"
        },
        {
          iconClass: "music",
          icon: "fas fa-headphones",
          name: "Music"
        },
        {
          iconClass: "games",
          icon: "fas fa-gamepad",
          name: "Games"
        }
      ],
      pdfPath: "./assets/curriculo2.pdf"
    },
    {
      experience: [
        {
          position: "Technical Consultant - Web Design",
          company: "Fiserv",
          date: "Apr 2018 - Now"
        },
        {
          position: "Web Designer",
          company: "Lynden",
          date: "Jan 2018 - Apr 2018"
        },
        {
          position: "Intern - Web Design",
          company: "Lynden",
          date: "Aug 2017 - Dec 2017"
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Web Design and Development",
          institution: "BYU-Idaho",
          date: "Jan. 2016 - Apr. 2018"
        },
        {
          degree: "Computer Science",
          institution: "Edmonds Community College",
          date: "Sept. 2014 - Dec. 2015"
        },
        {
          degree: "High School",
          institution: "Henry M. Jackson High School",
          date: "Jan. 2013 - Jun. 2015"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "CSS3 & SCSS",
          percent: 90
        },
        {
          name: "JavaScript",
          percent: 60
        },
        {
          name: "jQuery",
          percent: 50
        },
        {
          name: "JSON",
          percent: 40
        },
        {
          name: "PHP",
          percent: 55
        },
        {
          name: "MySQL",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Illustrator"
        },
        {
          name: "Photoshop"
        },
        {
          name: "InDesign"
        },
        {
          name: "Dreamweaver"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-dumbbell",
          name: "Academia"
        },
        {
          iconClass: "art",
          icon: "fas fa-book",
          name: "Books"
        },
        {
          iconClass: "movies",
          icon: "fas fa-film",
          name: "Movies"
        },
        {
          iconClass: "music",
          icon: "fas fa-headphones",
          name: "Music"
        },
        {
          iconClass: "games",
          icon: "fas fa-gamepad",
          name: "Games"
        }
      ],
      pdfPath: "./assets/curriculo1.pdf"
    },
    {
      experience: [
        {
          position: "Technical Consultant - Web Design",
          company: "Fiserv",
          date: "Apr 2018 - Now"
        },
        {
          position: "Web Designer",
          company: "Lynden",
          date: "Jan 2018 - Apr 2018"
        },
        {
          position: "Intern - Web Design",
          company: "Lynden",
          date: "Aug 2017 - Dec 2017"
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Web Design and Development",
          institution: "BYU-Idaho",
          date: "Jan. 2016 - Apr. 2018"
        },
        {
          degree: "Computer Science",
          institution: "Edmonds Community College",
          date: "Sept. 2014 - Dec. 2015"
        },
        {
          degree: "High School",
          institution: "Henry M. Jackson High School",
          date: "Jan. 2013 - Jun. 2015"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "CSS3 & SCSS",
          percent: 90
        },
        {
          name: "JavaScript",
          percent: 60
        },
        {
          name: "jQuery",
          percent: 50
        },
        {
          name: "JSON",
          percent: 40
        },
        {
          name: "PHP",
          percent: 55
        },
        {
          name: "MySQL",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Illustrator"
        },
        {
          name: "Photoshop"
        },
        {
          name: "InDesign"
        },
        {
          name: "Dreamweaver"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-dumbbell",
          name: "Academia"
        },
        {
          iconClass: "art",
          icon: "fas fa-book",
          name: "Books"
        },
        {
          iconClass: "movies",
          icon: "fas fa-film",
          name: "Movies"
        },
        {
          iconClass: "music",
          icon: "fas fa-headphones",
          name: "Music"
        },
        {
          iconClass: "games",
          icon: "fas fa-gamepad",
          name: "Games"
        }
      ],
      pdfPath: "./assets/curriculo1.pdf"
    },
    {
      experience: [
        {
          position: "Technical Consultant - Web Design",
          company: "Fiserv",
          date: "Apr 2018 - Now"
        },
        {
          position: "Web Designer",
          company: "Lynden",
          date: "Jan 2018 - Apr 2018"
        },
        {
          position: "Intern - Web Design",
          company: "Lynden",
          date: "Aug 2017 - Dec 2017"
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Web Design and Development",
          institution: "BYU-Idaho",
          date: "Jan. 2016 - Apr. 2018"
        },
        {
          degree: "Computer Science",
          institution: "Edmonds Community College",
          date: "Sept. 2014 - Dec. 2015"
        },
        {
          degree: "High School",
          institution: "Henry M. Jackson High School",
          date: "Jan. 2013 - Jun. 2015"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "CSS3 & SCSS",
          percent: 90
        },
        {
          name: "JavaScript",
          percent: 60
        },
        {
          name: "jQuery",
          percent: 50
        },
        {
          name: "JSON",
          percent: 40
        },
        {
          name: "PHP",
          percent: 55
        },
        {
          name: "MySQL",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Illustrator"
        },
        {
          name: "Photoshop"
        },
        {
          name: "InDesign"
        },
        {
          name: "Dreamweaver"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-dumbbell",
          name: "Academia"
        },
        {
          iconClass: "art",
          icon: "fas fa-book",
          name: "Books"
        },
        {
          iconClass: "movies",
          icon: "fas fa-film",
          name: "Movies"
        },
        {
          iconClass: "music",
          icon: "fas fa-headphones",
          name: "Music"
        },
        {
          iconClass: "games",
          icon: "fas fa-gamepad",
          name: "Games"
        }
      ],
      pdfPath: "./assets/curriculo1.pdf"
    }
  ];


  function createContainerResumeHTML(dataPerfil) {
    return `
        <div class="container-resume">
            <img src="${dataPerfil.imgSrc}"/>
            <div class="perfil">  
                <div class="perfil-borda">
                    <img src="${dataPerfil.perfilImgSrc}" />
                </div>
            </div>
            <h2>${dataPerfil.nome}</h2>
            <h3>${dataPerfil.profissao}</h3>
            <div class="linha"></div>
            <div class="description">
                ${dataPerfil.descricao}
            </div>
            <div class="icons">
                <a href="${dataPerfil.linkedin}" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="${dataPerfil.github}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </div>
      `;
  }

  // Função para adicionar os elementos container-resume ao elemento main
  function renderContainerResumes() {
    const mainElement = document.querySelector('main');
    mainElement.classList.remove('hidden')
    const backButton = document.querySelector('.backButton');
    backButton.classList.add('hidden');

    let containerResumesHTML = '';

    // Percorre o array de dados e gera o HTML para cada objeto
    for (let i = 0; i < dataPerfil.length; i++) {
      const containerResumeHTML = createContainerResumeHTML(dataPerfil[i]);
      containerResumesHTML += containerResumeHTML;
    }

    // Adiciona o HTML gerado ao elemento main
    mainElement.innerHTML = containerResumesHTML;

    const containerResumes = document.querySelectorAll('.container-resume');

    containerResumes.forEach((container, i) => {
      container.addEventListener('click', () => {
        // Hide the main section
        mainElement.style.display = 'none';

        renderProfiles(dataSidebar, i);
        renderCVSection(cvData, i)
        // Show the next page (container-cv)
        const containerCv = document.querySelector('.container-cv');
        containerCv.classList.remove('hidden');
      });
    });
  }

  // Chama a função para renderizar os elementos container-resume
  renderContainerResumes();

  function createProfileHTML(data) {
    return `
      <div class="perfil-cv">
        <div class="container-resume curriculo">
          <img src="${data.imgSrc}" />
          <div class="perfil">
            <div class="perfil-borda">
              <img src="${data.perfilImgSrc}" />
            </div>
          </div>
          <h2>${data.nome}</h2>
          <h3>${data.profissao}</h3>
          <div class="linha"></div>
          <div class="base">
            <div class="about">
              <h3>About Me</h3>
              ${data.descricao}
            </div>
            <div class="contact">
              <h3>Contact Me</h3>
              <div class="call">
                <a href="tel:${data.telefone}">
                  <i class="fas fa-phone"></i>
                  <span>${data.telefone}</span>
                </a>
              </div>
              <div class="address">
                <a href="https://goo.gl/maps/fiTBGT6Vnhy">
                  <i class="fas fa-map-marker"></i>
                  <span>${data.endereco}</span>
                </a>
              </div>
              <div class="email">
                <a href="mailto:${data.email}">
                  <i class="fas fa-envelope"></i>
                  <span>${data.email}</span>
                </a>
              </div>
              <div class="website">
                <a href="${data.website}" target="_blank">
                  <i class="fas fa-home"></i>
                  <span>${data.website}</span>
                </a>
              </div>
            </div>
            <div class="follow">
              <h3>Follow Me</h3>
              <div class="box">
                <a href="${data.instagram}" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="${data.github}" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="${data.linkedin}" target="_blank">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  }

  // Função para renderizar os perfis na página
  function renderProfiles(dataSidebar, clickedIndex) {
    console.log(dataSidebar[clickedIndex])
    const containerCVElement = document.querySelector('.container-cv');

    containerCVElement.innerHTML = ''; // Limpa o conteúdo anterior

    const profileHTML = createProfileHTML(dataSidebar[clickedIndex]);
    containerCVElement.innerHTML += profileHTML;

  }
  // Chame a função renderProfiles passando a lista de dados
  // renderProfiles(dataSidebar);


  function createCVHTML(data) {
    return `
      <div class="cv">
          <div class="func">
              <div class="func-first">
                  <div class="work">
                      <h3><i class="fa fa-briefcase"></i>Experience</h3>
                      <ul>
                          ${data.experience.map((exp) => `
                            <li><span>${exp.position}</span><small>${exp.company}</small><small>${exp.date}</small></li>
                          `).join('')}
                      </ul>
                  </div>
                  <div class="edu">
                      <h3><i class="fa fa-graduation-cap"></i>Education</h3>
                      <ul>
                          ${data.education.map((edu) => `
                            <li><span>${edu.degree}</span><small>${edu.institution}</small><small>${edu.date}</small></li>
                          `).join('')}
                      </ul>
                  </div>
              </div>
  
              <div class="skills-prog">
                  <h3><i class="fas fa-code"></i>Programming Skills</h3>
                  <ul>
                      ${data.programmingSkills.map((skill) => `
                        <li data-percent="${skill.percent}"><span>${skill.name}</span>
                            <div class="skills-bar">
                                <div class="bar"></div>
                            </div>
                        </li>
                      `).join('')}
                  </ul>
              </div>
  
              <div class="skills-soft">
                  <h3><i class="fas fa-bezier-curve"></i>Courses and Certifications</h3>
                  <ul>
                      ${data.certifications.map((cert) => `
                        <li><span>${cert.name}</span></li>
                      `).join('')}
                  </ul>
              </div>
  
              <div class="interests">
                  <h3><i class="fas fa-star"></i>Interests</h3>
                  <div class="interests-items">
                      ${data.interests.map((interest) => `
                        <div class="${interest.iconClass}"><i class="${interest.icon}"></i><span>${interest.name}</span></div>
                      `).join('')}
                  </div>
              </div>
          </div>
  
          <div class="download-button">
              <a href=${data.pdfPath} download>
                <button class="btn-download">Download CV</button>
              </a>
          </div>
      </div>
    `;
  }

  // Função para renderizar a seção "CV" na página
  function renderCVSection(data, clickedIndex) {
    const backButton = document.querySelector('.backButton');
    backButton.classList.remove('hidden');

    const containerCVElement = document.querySelector('.container-cv');

    const cvHTML = createCVHTML(data[clickedIndex]);
    containerCVElement.innerHTML += cvHTML;
  }

  // Chame a função renderCVSection passando os dados do objeto do CV
  // renderCVSection(cvData);

  function goToMainPage() {
  
    const containerCv = document.querySelector('.container-cv');
    containerCv.classList.add('hidden');

    window.location.reload();
    
  }
  
  // Evento de clique do botão
  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', goToMainPage);


});



