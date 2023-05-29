
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
      imgSrc: './assets/images/suzana/capa.jpeg',
      perfilImgSrc: './assets/images/suzana/suzana.png',
      nome: 'Suzana Anselmo',
      profissao: 'Interprete de Libras e professora',
      descricao: 'Sou uma profissional entusiasmada e determinada a iniciar uma carreira na área de computação em nuvem. Tenho um desejo genuíno de aprender e crescer nesse campo, e uma paixão por tecnologias de nuvem, como Amazon Web Services (AWS) e Microsoft Azure.',
      linkedin: 'https://www.linkedin.com/in/suzana-anselmo-71a575203/',
      github: ''
    },
    {
      imgSrc: './assets/images/Maike/capa3.jpg',
      perfilImgSrc: './assets/images/Maike/int3.jpeg',
      nome: 'Maike Josuer',
      profissao: 'Estudante',
      descricao: 'Gostaria de colaborar em um ambiente de trabalho onde possa aproveitar a oportunidade e colocar em prática meus conhecimentos em favor da empresa na qual viso integrar, focando sempre o benefício e o crescimento da mesma.',
      linkedin: 'https://www.linkedin.com/in/maike-sombra/',
      github: 'https://github.com/Maike-Sombra'
    },
    {
      imgSrc: './assets/images/felipe/capa4.jpg',
      perfilImgSrc: './assets/images/felipe/int4.jpg',
      nome: 'Felipe Lima',
      profissao: 'Analista de suporte',
      descricao: 'Analista de suporte com experiência na área técnica de resolução de problema, execução de configurações, reparo em aplicação, com base no problema relatado. Busco conhecer e aprender a implementar estratégias de migração de aplicações para a Cloud.',
      linkedin: 'https://www.linkedin.com/in/felipe-lima-0841a5166/',
      github: ''
    }
    // Adicione mais objetos para mais containers aqui
  ];


  const dataSidebar = [
    {
      imgSrc: './assets/images/nath/capa.jpg',
      perfilImgSrc: './assets/images/nath/nathimg.jpg',
      nome: 'Natanaele Balica',
      profissao: 'Desenvolvedora de software',
      descricao: "Sou uma engenheira e desenvolvedora de software com experiência em desenvolvimento back-end. Durante meu estágio como desenvolvedora, tive a oportunidade de conhecer e me interessar pela área de computação em nuvem.",
      telefone: '(61)991581058',
      endereco: 'Brasília, DF',
      email: 'natanaelebalic@gmail.com',
      instagram: 'https://instagram.com/nathbalica?igshid=MzNlNGNkZWQ4Mg==',
      github: 'https://github.com/nathbalica',
      linkedin: 'https://www.linkedin.com/in/natanaelebalica/'
    },
    {
      imgSrc: './assets/images/suzana/capa.jpeg',
      perfilImgSrc: './assets/images/suzana/suzana.png',
      nome: 'Suzana Anselmo',
      profissao: 'Interprete de Libras e professora',
      descricao: 'Sou uma profissional entusiasmada e determinada a iniciar uma carreira na área de computação em nuvem. Tenho um desejo genuíno de aprender e crescer nesse campo, e uma paixão por tecnologias de nuvem, como Amazon Web Services (AWS) e Microsoft Azure.',
      telefone: '(97)999590427',
      endereco: 'Manaus, Amazonas',
      email: 'susu.anselmo77@gmail.com',
      instagram: '',
      github: '',
      linkedin: 'https://www.linkedin.com/in/suzana-anselmo-71a575203/'
    },
    {
      imgSrc: './assets/images/Maike/capa3.jpg',
      perfilImgSrc: './assets/images/Maike/int3.jpeg',
      nome: 'Maike Josuer',
      profissao: 'Estudante',
      descricao: "Gostaria de colaborar em um ambiente de trabalho onde possa aproveitar a oportunidade e colocar em prática meus conhecimentos em favor da empresa na qual viso integrar, focando sempre o benefício e o crescimento da mesma.",
      telefone: '(98) 98508-7097',
      endereco: 'Turu, São Luís - MA',
      email: 'maikejsn@gmail.com',
      instagram: '',
      linkedin: 'https://www.linkedin.com/in/maike-sombra/',
      github: 'https://github.com/Maike-Sombra'
    },
    {
      imgSrc: './assets/images/felipe/capa4.jpg',
      perfilImgSrc: './assets/images/felipe/int4.jpg',
      nome: 'Felipe Lima',
      profissao: 'Analista de Suporte',
      descricao: "Analista de suporte com experiência na área técnica de resolução de problema, execução de configurações, reparo em aplicação, com base no problema relatado. Busco conhecer e aprender a implementar estratégias de migração de aplicações para a Cloud.",
      telefone: '(11) 95364-2889',
      endereco: 'São Paulo - SP',
      email: 'felipe_live@outlook.com.br',
      instagram: '',
      github: '',
      linkedin: 'https://www.linkedin.com/in/felipe-lima-0841a5166/'
    }
    // Adicione mais objetos para mais perfis aqui
  ];

  const cvData = [
    {
      experience: [
        {
          position: "Bootcamp desenvolvimento FullStack",
          company: "Driven Education",
          date: "Jan 2023 - Agora"
        },
        {
          position: "Desenvolvedora BackEnd",
          company: "Atmos Energy",
          date: "Out 2022 - Mar 2023"
        },
        {
          position: " Estágio em Desenvolvimento BackEnd",
          company: "Zapay",
          date: "Out 2021 - Out 2022"
        }
      ],
      education: [
        {
          degree: "Formação em desenvolvimento backend",
          institution: "Pubnic",
          date: "Nov. 2021 - Jun. 2022"
        },
        {
          degree: "Engenharia Eletrônica",
          institution: "Universidade de Brasília",
          date: "Ago. 2015 - Ago. 2022"
        },
        {
          degree: "Ensino Médio",
          institution: "Manoel Teixeira de Albuquerque",
          date: "Jan. 2011 - Dez. 2014"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "CSS",
          percent: 90
        },
        {
          name: "JavaScript",
          percent: 60
        },
        {
          name: "React",
          percent: 50
        },
        {
          name: "Python",
          percent: 40
        },
        {
          name: "Flask",
          percent: 55
        },
        {
          name: "Django",
          percent: 40
        },
        {
          name: "Postgress",
          percent: 40
        },
        {
          name: "MongoDB",
          percent: 40
        },
        {
          name: "AWS",
          percent: 40
        },
        {
          name: "Git e Github",
          percent: 40
        },
        {
          name: "APIs",
          percent: 40
        },
      ],
      certifications: [
        {
          name: "Fundamentos de AWS, Escola da Nuvem – 2023"
        },
        {
          name: "Interfaces e Aplicações FrontEnd - 2023"
        },
        {
          name: "Desenvolvimento backend com Python - 2022"
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
          icon: "fas fa-laptop-code",
          name: "Tecnologia"
        },
        {
          iconClass: "music",
          icon: "fas fa-bicycle",
          name: "Ciclismo"
        },
        {
          iconClass: "games",
          icon: "fas fa-cloud",
          name: "Cloud"
        }
      ],
      pdfPath: "./assets/cvs/NatanaeleCV.pdf"
    },
    {
      experience: [
        {
          position: "Professora",
          company: "Centro de Educação Tecnológica Do Amazonas - CETAM",
          date: "Abr 2015 - Agora"
        }
      ],
      education: [
        {
          degree: "Tecnico em administração",
          institution: "Senac",
          date: "2023 "
        },
        {
          degree: "Computação em Nuvem",
          institution: "Escola da Nuvem",
          date: "2023"
        },
        {
          degree: "Computação em Nuvem",
          institution: "Fatec",
          date: "2020"
        },
        {
          degree: "Ensino Médio",
          institution: "Escola Amazonense D. Pedro II",
          date: "1996"
        }
      ],
      programmingSkills: [
        {
          name: "AWS",
          percent: 95
        }
      ],
      certifications: [
        {
          name: "Computação em Nuvem - Escola da Nuvem"
        },
        {
          name: "Computação em Nuvem - Fatec"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-laptop-code",
          name: "Tecnologia"
        },
        {
          iconClass: "movies",
          icon: "fas fa-book",
          name: "Aprender coisas novas"
        },
        {
          iconClass: "music",
          icon: "fas fa-language",
          name: "Idiomas"
        }
      ],
      pdfPath: "./assets/cvs/suzana.pdf"
    },
    {
      experience: [
        {
          position: "Jovem Aprendiz – Auxiliar de Marcenaria",
          company: "COMERCIAL GOMES: Material de Construção",
          date: "Fev 2018 - Out 2018"
        }
      ],
      education: [
        {
          degree: "Sistemas de Informação",
          institution: "IFMA",
          date: "Jan. 2021 - Agora"
        }
      ],
      programmingSkills: [
        {
          name: "JavaScript",
          percent: 95
        },
        {
          name: "Java",
          percent: 90
        },
        {
          name: "HTML5",
          percent: 60
        },
        {
          name: "CSS3",
          percent: 50
        },
        {
          name: "NodeJS",
          percent: 40
        },
        {
          name: "MySql",
          percent: 55
        },
        {
          name: "Mongo DB",
          percent: 40
        },
        {
          name: "Git e Github",
          percent: 40
        },
        {
          name: "AWS",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Fundamentos de AWS, Escola da Nuvem – 2023"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-laptop-code",
          name: "Tecnologia"
        },
      ],
      pdfPath: "./assets/cvs/MaikeSombraCV.pdf"
    },
    {
      experience: [
        {
          position: "Analista de Suporte N2",
          company: "Locaweb",
          date: "Out 2022 - Agora"
        },
        {
          position: "Analista de Suporte N1",
          company: "Locaweb",
          date: "Jun 2021 - Out 2022"
        },
        {
          position: "Auxiliar de Suporte e HelpDesk II",
          company: "Centro Universitário São Camilo",
          date: "Fev 2021 - Jun 2021"
        },
        {
          position: "Auxiliar de Suporte e HelpDesk I",
          company: "Centro Universitário São Camilo",
          date: "Out 2019 - Jan 2021"
        }
      ],
      education: [
        {
          degree: "Tecnólogo em Gestão da Tecnologia da Informação",
          institution: "Universidade Paulista",
          date: "Jan. 2016 - Dez. 2017"
        }
      ],
      programmingSkills: [
        {
          name: "HTML5",
          percent: 95
        },
        {
          name: "PHP",
          percent: 90
        },
        {
          name: "MySQL",
          percent: 60
        },
        {
          name: "SQL Server",
          percent: 50
        },
        {
          name: "PHPMYAdmin",
          percent: 40
        },
        {
          name: "PostgreSQL",
          percent: 55
        },
        {
          name: "Kibana",
          percent: 40
        },
        {
          name: "Linux",
          percent: 40
        },
        {
          name: "AWS",
          percent: 40
        }
      ],
      certifications: [
        {
          name: "Administração de PostgreSQL com alta performance -/ 4Linux"
        },
        {
          name: "Administração MYSQL com alta performance e alta disponibilidade -/ 4Linux"
        },
        {
          name: "Fundamentos do SAP-/ KaSolution"
        },
        {
          name: "Computação em Nuvem AWS/ - KaSolution"
        },
        {
          name: "Computação em Nuvem AWS/ - Escola da Nuvem"
        }
      ],
      interests: [
        {
          iconClass: "art",
          icon: "fas fa-laptop-code",
          name: "Tecnologia"
        }
      ],
      pdfPath: "./assets/cvs/FelipeSouzaCV.pdf"
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
              <h3>Sobre Mim</h3>
              ${data.descricao}
            </div>
            <div class="contact">
              <h3>Contatos</h3>
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
            </div>
            <div class="follow">
              <h3>Me Sigam</h3>
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
                      <h3><i class="fa fa-briefcase"></i>Experiência</h3>
                      <ul>
                          ${data.experience.map((exp) => `
                            <li><span>${exp.position}</span><small>${exp.company}</small><small>${exp.date}</small></li>
                          `).join('')}
                      </ul>
                  </div>
                  <div class="edu">
                      <h3><i class="fa fa-graduation-cap"></i>Educação</h3>
                      <ul>
                          ${data.education.map((edu) => `
                            <li><span>${edu.degree}</span><small>${edu.institution}</small><small>${edu.date}</small></li>
                          `).join('')}
                      </ul>
                  </div>
              </div>
  
              <div class="skills-prog">
                  <h3><i class="fas fa-code"></i>Habilidades Técnicas</h3>
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
                  <h3><i class="fas fa-bezier-curve"></i>Cursos e Certificações</h3>
                  <ul>
                      ${data.certifications.map((cert) => `
                        <li><span>${cert.name}</span></li>
                      `).join('')}
                  </ul>
              </div>
  
              <div class="interests">
                  <h3><i class="fas fa-star"></i>Interesses</h3>
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





