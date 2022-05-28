var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

var users = [
	{
		username: 'martim',
		email: '11083420@lis.ulusiada.pt',
		password: '12',
		fullName: 'Martim T. Chambel',
		image: 'img/profile1.jpg',
    horario: 'img/FULL_H1.jpg',
    nascimento: '03/07/2002',
    cc: '15750779 3ZX4',
    pai: 'Andrade de Sousa Garret',
    mae: 'Maria Augusta Silva',
    morada: 'Rua Amália Rodrigues A-10',
    postcard: '7860-035',
    localidade: 'Moura',
    conselho: 'Moura',
    distrito: 'Beja',
    telem: '+351924257357',
    telef: '+351285252539',
    numero: '11083420',
    curso: 'Engenharia Informática',
    anoCurso: '2º',
    inscricao: '06/10/2020',
    emailCurso: '11083420@lis.ulusiada.pt',
   
    propina: '294,50€',
    exames: '49,50€',
		events: [
        {
          title: 'H.C.P.',
          start: '2022-04-20',
          description: 'teste'
        },
        {
          title: 'P.A.',
          start: '2022-04-05',
          description: 'Teste'
        },
        {
          title: 'C.R.G.',
          start: '2022-04-07T09:00:00',
          description: 'Entrega do trabalho'
        },
        {
          title: 'A.M.',
          start: '2022-04-07T14:00:00',
          description: 'teste'
        },
        /*{
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-03-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-03-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2020-03-11',
          end: '2020-03-13',
          description: 'Sala E9'
        },*/
        {
          title: 'B.D.',
          start: '2022-04-25',
          description: 'Teste'
        },
        {
          title: 'LGW',
          start: '2022-04-09',
          end: '2022-04-11',
          description: 'Lusiada Games Weekend'
        },
        {
          title: 'Ética',
          start: '2022-04-11T11:00:00',
          description: 'Teste'
        },
        {
          title: 'P.E.',
          start: '2022-04-14T09:00:00'
        },
        {
          title: 'Futurália',
          start: '2022-03-30',
          end: '2022-04-03'
        },/*
        {
          title: 'Happy Hour',
          start: '2020-03-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2020-03-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2020-03-13T07:00:00'
        },
        /*
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-03-28'
        }*/
      ],
      setembro: '07/09/2021',
      outubro: '15/10/2021',
      novembro: '09/11/2021',
      dezembro: '01/12/2021',
      janeiro: '06/01/2022',
      fevereiro: '20/02/2022',
      março: '03/03/2022',
      abril: '02/04/2022',
      finais:[
        {
          0: 'Algebra Línear',
          1: '14'
        },
        {
          0: 'Análise de Sistemas',
          1: '14'
        },
        {
          0: 'Arquitectura de Computadores',
          1: '11'
        },
        {
          0: 'Introdução á Análise Matemática',
          1: '14'
        },
        {
          0: 'Introdução á Física',
          1: '10'
        },
        {
          0: 'Introdução á Programação',
          1: '14'
        },
        {
          0: 'Introdução aos Algoritmos e Estruturas de Dados',
          1: '13'
        },
        {
          0: 'Programação',
          1: '14'
        },
        {
          0: 'Sistemas Digitais',
          1: '13'
        },
        {
          0: 'Algoritmos e Estruturas de Dados',
          1: '14'
        },
        {
          0: 'Complementos de Programação',
          1: '14'
        },
        {
          0: 'Redes de Comunicação',
          1: '14'
        }
      ],
      horario:[
        {
          0: '09:00',
          1: '',
          2: '',
          3: 'C.R.G. 9E',
          4: 'C.R.G. 9E',
          5: '',
          6: ''
        },
        {
          0: '10:00',
          1: 'H.C.P. A3',
          2: 'H.C.P. A3',
          3: 'P.E. 1F',
          4: 'C.R.G. 9E',
          5: '',
          6: ''
        },
        {
          0: '11:00',
          1: 'Ética',
          2: 'P.A. 11E',
          3: 'P.E. 1F',
          4: 'P.E. 1F',
          5: '',
          6: ''
        },
        {
          0: '12:00',
          1: 'P.A. 9E',
          2: 'P.A. 11E',
          3: 'B.D. 9E',
          4: 'Ética 5F',
          5: '',
          6: ''
        },
        {
          0: '13:00',
          1: 'B.D. 9E',
          2: 'A.M. 8F',
          3: 'B.D. 9E',
          4: 'A.M. 8F',
          5: '',
          6: ''
        },
        {
          0: '14:00',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        },
        {
          0: '15:00',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        }
      ],
      notas: [
        {
          0: 'A.M.',
          1: '13',
          2: '11',
          3: '-',
          4: '12'
        },
        {
          0: 'B.D.',
          1: '10',
          2: '15',
          3: '18',
          4: '14'
        },
        {
          0: 'C.R.G.',
          1: '18',
          2: '17',
          3: '19',
          4: '18'
        },
        {
          0: 'Ética',
          1: '14',
          2: '12',
          3: '-',
          4: '13'
        },
        {
          0: 'H.C.P.',
          1: '15',
          2: '15',
          3: '-',
          4: '15'
        },
        {
          0: 'P.A.',
          1: '10',
          2: '11',
          3: '13',
          4: '11'
        },
        {
          0: 'P.E.',
          1: '13',
          2: '11',
          3: '13',
          4: '12'
        }
      ],
      notasfinais: [
        {
          0: 'A.M.',
          1: '12',
          2: '12',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        },
        {
          0: 'B.D.',
          1: '14',
          2: '12',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        },
        {
          0: 'C.R.G.',
          1: '18',
          2: '14',
          3: '16',
          4: '-',
          5: '-',
          6: '-',
          7: '16'
        },
        {
          0: 'Ética',
          1: '13',
          2: '11',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        },
        {
          0: 'H.C.P.',
          1: '15',
          2: '12',
          3: '13',
          4: '-',
          5: '-',
          6: '-',
          7: '13'
        },
        {
          0: 'P.A.',
          1: '11',
          2: '6',
          3: '8',
          4: '7',
          5: '-',
          6: '13',
          7: '14'
        },
        {
          0: 'P.E.',
          1: '11',
          2: '12',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        }
      ]
	},
  {
    username: 'martim',
    email: 'M@g.c',
    password: '12',
    fullName: 'Martim T. Chambel',
    image: 'img/profile1.jpg',
    horario: 'img/FULL_H1.jpg',
    nascimento: '03/07/2002',
    cc: '15750779 3ZX4',
    pai: 'Andrade de Sousa Garret',
    mae: 'Maria Augusta Silva',
    morada: 'Rua Amália Rodrigues A-10',
    postcard: '7860-035',
    localidade: 'Moura',
    conselho: 'Moura',
    distrito: 'Beja',
    telem: '+351924257357',
    telef: '+351285252539',
    numero: '11083420',
    curso: 'Engenharia Informática',
    anoCurso: '2º',
    inscricao: '06/10/2020',
    emailCurso: '11083420@lis.ulusiada.pt',
   
    propina: '294,50€',
    exames: '49,50€',
    events: [
        {
          title: 'H.C.P.',
          start: '2022-04-20',
          description: 'teste'
        },
        {
          title: 'P.A.',
          start: '2022-04-05',
          description: 'Teste'
        },
        {
          title: 'C.R.G.',
          start: '2022-04-07T09:00:00',
          description: 'Entrega do trabalho'
        },
        {
          title: 'A.M.',
          start: '2022-04-07T14:00:00',
          description: 'teste'
        },
        /*{
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-03-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-03-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2020-03-11',
          end: '2020-03-13',
          description: 'Sala E9'
        },*/
        {
          title: 'B.D.',
          start: '2022-04-25',
          description: 'Teste'
        },
        {
          title: 'LGW',
          start: '2022-04-09',
          end: '2022-04-11',
          description: 'Lusiada Games Weekend'
        },
        {
          title: 'Ética',
          start: '2022-04-11T11:00:00',
          description: 'Teste'
        },
        {
          title: 'P.E.',
          start: '2022-04-14T09:00:00'
        },
        {
          title: 'Futurália',
          start: '2022-03-30',
          end: '2022-04-03'
        },/*
        {
          title: 'Happy Hour',
          start: '2020-03-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2020-03-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2020-03-13T07:00:00'
        },
        /*
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-03-28'
        }*/
      ],
      setembro: '07/09/2021',
      outubro: '15/10/2021',
      novembro: '09/11/2021',
      dezembro: '01/12/2021',
      janeiro: '06/01/2022',
      fevereiro: '20/02/2022',
      março: '03/03/2022',
      abril: '02/04/2022',
      finais:[
        {
          0: 'Algebra Línear',
          1: '14'
        },
        {
          0: 'Análise de Sistemas',
          1: '14'
        },
        {
          0: 'Arquitectura de Computadores',
          1: '11'
        },
        {
          0: 'Introdução á Análise Matemática',
          1: '14'
        },
        {
          0: 'Introdução á Física',
          1: '10'
        },
        {
          0: 'Introdução á Programação',
          1: '14'
        },
        {
          0: 'Introdução aos Algoritmos e Estruturas de Dados',
          1: '13'
        },
        {
          0: 'Programação',
          1: '14'
        },
        {
          0: 'Sistemas Digitais',
          1: '13'
        },
        {
          0: 'Algoritmos e Estruturas de Dados',
          1: '14'
        },
        {
          0: 'Complementos de Programação',
          1: '14'
        },
        {
          0: 'Redes de Comunicação',
          1: '14'
        }
      ],
      horario:[
        {
          0: '09:00',
          1: '',
          2: '',
          3: 'C.R.G. 9E',
          4: 'C.R.G. 9E',
          5: '',
          6: ''
        },
        {
          0: '10:00',
          1: 'H.C.P. A3',
          2: 'H.C.P. A3',
          3: 'P.E. 1F',
          4: 'C.R.G. 9E',
          5: '',
          6: ''
        },
        {
          0: '11:00',
          1: 'Ética',
          2: 'P.A. 11E',
          3: 'P.E. 1F',
          4: 'P.E. 1F',
          5: '',
          6: ''
        },
        {
          0: '12:00',
          1: 'P.A. 9E',
          2: 'P.A. 11E',
          3: 'B.D. 9E',
          4: 'Ética 5F',
          5: '',
          6: ''
        },
        {
          0: '13:00',
          1: 'B.D. 9E',
          2: 'A.M. 8F',
          3: 'B.D. 9E',
          4: 'A.M. 8F',
          5: '',
          6: ''
        },
        {
          0: '14:00',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        },
        {
          0: '15:00',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        }
      ],
      notas: [
        {
          0: 'A.M.',
          1: '13',
          2: '11',
          3: '-',
          4: '12'
        },
        {
          0: 'B.D.',
          1: '10',
          2: '15',
          3: '18',
          4: '14'
        },
        {
          0: 'C.R.G.',
          1: '18',
          2: '17',
          3: '19',
          4: '18'
        },
        {
          0: 'Ética',
          1: '14',
          2: '12',
          3: '-',
          4: '13'
        },
        {
          0: 'H.C.P.',
          1: '15',
          2: '15',
          3: '-',
          4: '15'
        },
        {
          0: 'P.A.',
          1: '10',
          2: '11',
          3: '13',
          4: '11'
        },
        {
          0: 'P.E.',
          1: '13',
          2: '11',
          3: '13',
          4: '12'
        }
      ],
      notasfinais: [
        {
          0: 'A.M.',
          1: '12',
          2: '12',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        },
        {
          0: 'B.D.',
          1: '14',
          2: '12',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        },
        {
          0: 'C.R.G.',
          1: '18',
          2: '14',
          3: '16',
          4: '-',
          5: '-',
          6: '-',
          7: '16'
        },
        {
          0: 'Ética',
          1: '13',
          2: '11',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        },
        {
          0: 'H.C.P.',
          1: '15',
          2: '12',
          3: '13',
          4: '-',
          5: '-',
          6: '-',
          7: '13'
        },
        {
          0: 'P.A.',
          1: '11',
          2: '6',
          3: '8',
          4: '7',
          5: '-',
          6: '13',
          7: '14'
        },
        {
          0: 'P.E.',
          1: '11',
          2: '12',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        }
      ]
  },
	{
		username: 'diogo',
    email: 'drsimoes2002@gmail.com',
    password: '321',
    fullName: 'Diogo R. C. Simões',
    address: 'Sala 9E',
    image: 'img/profile2.jpg', 
    horario: 'img/FULL_H2.jpg', 
    nascimento: '07/09/2002',
    cc: '15342539 3ZY9',
    pai: 'Paulo Jorge Tourais Simões',
    mae: 'Rosa Maria Cleriguinha Ferreira Simões',
    morada: 'Avenida Infante D.Henrique',
    postcard: '2735-115',
    localidade: 'Agualva-Mira Sintra',
    conselho: 'Sintra',
    distrito: 'Lisboa',
    telem: '+351912036593',
    telef: '+351214321752',
    numero: '11085620',
    curso: 'Engenharia Informática',
    anoCurso: '2º',
    ano1:'1º',
    ano2: '2º',
    turma: 'A',
    inscricao: '06/10/2020',
    emailCurso: '11085620@lis.ulusiada.pt',
    propina: '297,50€',
    exames: '50,00€',
     horario:[
        {
          0: '09:00',
          1: 'C.R.G. 9E',
          2: 'C.R.G 9E',
          3: '',
          4: '',
          5: '',
          6: ''
        },
        {
          0: '10:00',
          1: 'H.C.P. A3',
          2: 'H.C.P. A3',
          3: 'P.E. 1F',
          4: 'C.R.G. 9E',
          5: '',
          6: ''
        },
        {
          0: '11:00',
          1: 'Ética',
          2: 'P.A. 11E',
          3: 'P.E. 1F',
          4: 'P.E. 1F',
          5: '',
          6: ''
        },
        {
          0: '12:00',
          1: 'P.A. 9E',
          2: 'P.A. 11E',
          3: 'B.D. 9E',
          4: 'Ética 5F',
          5: '',
          6: ''
        },
        {
          0: '13:00',
          1: 'B.D. 9E',
          2: 'A.M. 8F',
          3: 'B.D. 9E',
          4: 'A.M. 8F',
          5: '',
          6: ''
        },
        {
          0: '14:00',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        },
        {
          0: '15:00',
          1: '',
          2: '',
          3: '',
          4: '',
          5: '',
          6: ''
        }
      ],	
    notasfinais: [
        {
          0: 'A.M.',
          1: '12',
          2: '14',
          3: '14',
          4: '-',
          5: '-',
          6: '-',
          7: '14'
        },
        {
          0: 'B.D.',
          1: '14',
          2: '14',
          3: '14',
          4: '-',
          5: '-',
          6: '-',
          7: '14'
        },
        {
          0: 'C.R.G.',
          1: '18',
          2: '15',
          3: '17',
          4: '-',
          5: '-',
          6: '-',
          7: '17'
        },
        {
          0: 'Ética',
          1: '13',
          2: '11',
          3: '12',
          4: '-',
          5: '-',
          6: '-',
          7: '12'
        },
        {
          0: 'H.C.P.',
          1: '15',
          2: '13',
          3: '14',
          4: '-',
          5: '-',
          6: '-',
          7: '14'
        },
        {
          0: 'P.A.',
          1: '11',
          2: '10',
          3: '10',
          4: '13',
          5: '-',
          6: '-',
          7: '13'
        },
        {
          0: 'P.E.',
          1: '12',
          2: '5',
          3: '9',
          4: '9',
          5: '14',
          6: '13',
          7: '14'
        }
      ],
      setembro: '07/09/2021',
      outubro: '06/10/2021',
      novembro: '03/11/2021',
      dezembro: '04/12/2021',
      janeiro: '06/01/2022',
      fevereiro: '03/02/2022',
      março: '07/03/2022',
      abril: '05/04/2022',
		events: [
        {
          title: 'All Day Event',
          start: '2020-02-01',
          description: 'Very long event'
        },
        {
          title: 'Long Event',
          start: '2020-02-07',
          end: '2020-02-10',
          description: 'An even longer event'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-02-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-02-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2020-02-11',
          end: '2020-02-13',
          description: 'Sala E9'
        },
        {
          title: 'Meeting',
          start: '2020-02-12T10:30:00',
          end: '2020-02-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2020-02-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2020-02-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2020-02-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2020-02-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2020-02-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-02-28'
        }
      ],
      events: [
        {
          title: 'H.C.P.',
          start: '2022-04-20',
          description: 'teste'
        },
        {
          title: 'P.A.',
          start: '2022-04-05',
          description: 'Teste'
        },
        {
          title: 'C.R.G.',
          start: '2022-04-07T09:00:00',
          description: 'Entrega do trabalho'
        },
        {
          title: 'A.M.',
          start: '2022-04-07T14:00:00',
          description: 'teste'
        },
        /*{
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-03-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2020-03-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2020-03-11',
          end: '2020-03-13',
          description: 'Sala E9'
        },*/
        {
          title: 'B.D.',
          start: '2022-04-25',
          description: 'Teste'
        },
        {
          title: 'LGW',
          start: '2022-04-09',
          end: '2022-04-11',
          description: 'Lusiada Games Weekend'
        },
        {
          title: 'Ética',
          start: '2022-04-11T11:00:00',
          description: 'Teste'
        },
        {
          title: 'P.E.',
          start: '2022-04-14T09:00:00'
        },
        {
          title: 'Futurália',
          start: '2022-03-30',
          end: '2022-04-03'
        }
      ],
      notas: [
        {
          0: 'A.M.',
          1: '10',
          2: '11',
          3: '-',
          4: '10'
        },
        {
          0: 'B.D.',
          1: '11',
          2: '14',
          3: '18',
          4: '14'
        },
        {
          0: 'C.R.G.',
          1: '18',
          2: '18',
          3: '-',
          4: '18'
        },
        {
          0: 'Ética',
          1: '12',
          2: '15',
          3: '-',
          4: '13'
        },
        {
          0: 'H.C.P.',
          1: '15',
          2: '16',
          3: '-',
          4: '15'
        },
        {
          0: 'P.A.',
          1: '11',
          2: '10',
          3: '14',
          4: '12'
        },
        {
          0: 'P.E.',
          1: '10',
          2: '12',
          3: '-',
          4: '11'
        }
      ],
	}
];

function validate(){
	console.log('Validate');
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	for (let i = 0; i < users.length; i++) {
		if ((users[i].email === email) && (users[i].password === password)) {
			alert ("Login successfully");
			sessionStorage.setItem("user",  JSON.stringify(users[i]));
			window.location = "index.html"; // Redirecting to other page.
			return false;			
		}
	}
	attempt --;// Decrementing by one.
	alert("You have left "+attempt+" attempt;");
	// Disabling fields after 3 attempts.
	if( attempt == 0){
		document.getElementById("email").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
	}
	return true;
}
