const data = [
    {
      imgSrc: './images/nath/capa.jpg',
      perfilImgSrc: './images/nath/nathimg.jpg',
      nome: 'Natanaele Balica',
      profissao: 'Desenvolvedora de software',
      descricao: 'Sou uma engenheira e desenvolvedora de software com experiência em desenvolvimento back-end. Durante meu estágio como desenvolvedora, tive a oportunidade de conhecer e me interessar pela área de computação em nuvem.',
      linkedin: 'https://www.linkedin.com/in/natanaelebalica/',
      github: 'https://github.com/nathbalica'
    },
    {
        imgSrc: './images/integrantes/capa.jpeg',
        perfilImgSrc: './images/integrantes/int.jpg',
        nome: 'Mary Smith',
        profissao: 'Desenvolvedora front-end',
        descricao: 'Sou uma designer gráfica e desenvolvedora front-end. Tenho paixão por criar interfaces intuitivas e atraentes. Minha experiência abrange design de logotipos, identidade visual, UI/UX e codificação.',
        linkedin: 'https://www.linkedin.com/in/marysmith/',
        github: 'https://github.com/marysmith'
      },
    {
        imgSrc: './images/integrantes/capa3.jpg',
      perfilImgSrc: './images/integrantes/int3.jpeg',
      nome: 'John Doe',
      profissao: 'Desenvolvedor web',
      descricao: 'Sou um desenvolvedor web com experiência em front-end e back-end. Trabalhei em diversos projetos, desde sites institucionais até aplicações web complexas. Estou sempre buscando aprender e aprimorar minhas habilidades.',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
      github: 'https://github.com/johndoe'
    },
    {
        imgSrc: './images/integrantes/capa4.jpg',
        perfilImgSrc: './images/integrantes/int4.jpg',
        nome: 'Pedro Souza',
        profissao: 'Designer gráfico',
        descricao: 'Sou uma designer gráfica e desenvolvedora front-end. Tenho paixão por criar interfaces intuitivas e atraentes. Minha experiência abrange design de logotipos, identidade visual, UI/UX e codificação.',
        linkedin: 'https://www.linkedin.com/in/marysmith/',
        github: 'https://github.com/marysmith'
    },
    {
        imgSrc: './images/integrantes/capa5.jpg',
        perfilImgSrc: './images/integrantes/int5.jpg',
        nome: 'Gabriel Carvalho',
        profissao: 'Desenvolvedor',
        descricao: 'Sou uma designer gráfica e desenvolvedora front-end. Tenho paixão por criar interfaces intuitivas e atraentes. Minha experiência abrange design de logotipos, identidade visual, UI/UX e codificação.',
        linkedin: 'https://www.linkedin.com/in/marysmith/',
        github: 'https://github.com/marysmith'
      }
    // Adicione mais objetos para mais containers aqui
  ];

function createContainerResumeHTML(data) {
    return `
      <div class="container-resume">
          <img src="${data.imgSrc}"/>
          <div class="perfil">  
              <div class="perfil-borda">
                  <img src="${data.perfilImgSrc}" />
              </div>
          </div>
          <h2>${data.nome}</h2>
          <h3>${data.profissao}</h3>
          <div class="linha"></div>
          <div class="description">
              ${data.descricao}
          </div>
          <div class="icons">
              <a href="${data.linkedin}" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="${data.github}" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
          </div>
      </div>
    `;
  }
  
  // Função para adicionar os elementos container-resume ao elemento main
  function renderContainerResumes() {
    const mainElement = document.querySelector('main');
    let containerResumesHTML = '';
  
    // Percorre o array de dados e gera o HTML para cada objeto
    for (let i = 0; i < data.length; i++) {
      const containerResumeHTML = createContainerResumeHTML(data[i]);
      containerResumesHTML += containerResumeHTML;
    }
  
    // Adiciona o HTML gerado ao elemento main
    mainElement.innerHTML = containerResumesHTML;
  }
  
  // Chama a função para renderizar os elementos container-resume
  renderContainerResumes();