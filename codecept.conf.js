exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Protractor:
    { 
      url: 'https://nettest.acial.fr',
      host: '127.0.0.1',
      port:4444,
      browser: 'MicrosoftEdge',
	    restart: true,
      keepBrowserStat: false,
      keepCookies: false,
      maxInstances:1,
      windowSize: 'maximize',
      smartWait: 5000,
      waitForTimeout: 5000,
      scriptTimeout: 5000,
      getPageTimeout:15000,
      desiredCapabilities: {chromeOptions:{args: [ "--disable-gpu"]}},
      chrome: {
        headless: false
      },
      angular: false
      } 
    },
  include: {
    menu: './pages/menu.js',
    accueilPage: './pages/accueil.js',
    supportsPage:'./pages/supports.js',
    photothequePage: './pages/phototheque.js',
    contactsPage: './pages/contacts.js',
    rddCpPage: './pages/rddCp.js', 
    rddFacturesAttentePage: './pages/rddFacturesAttente.js',
    rddEfficyPage: './pages/rddEfficy.js',
    competencesPage: './pages/competences.js',
    documentsPage: './pages/documents.js',
    simbaPage: './pages/simba.js',
    simbaCraPage: './pages/simbaCra.js',
    simbaAlertesPage: './pages/simbaAlertes.js',
    simbaAlertesSmsBoPage: './pages/simbaAlertesSMSBO.js',
    simbaAlertemailMoPage: './pages/simbaAlertemailMO.js',
    rddBizPage: './pages/rddBiz.js',
    rddCommandesPage: './pages/rddAccederAuxCommandes.js',
    I: './actors/mainActor.js',
    login:'./actors/loginActor.js',
    utils:'./actors/utilsActor.js',
    competenceRechercheCompetencesPage:'./pages/competenceRechercheCompetence.js',
    rddDemandeDecontratPage:'./pages/rddDemandeDecontrat.js',
    rddListeConsultantsEtSoldesPage:'./pages/rddListeConsultantsEtSoldes.js',
    competencesRechercheConsultantPage:'./pages/competencesRechercheConsultant.js',
    simbaAtNouvelleDemandePage:'./pages/simbaAtCreerNouvelleDemande.js',
    simbaAtPage:'./pages/simbaAt.js',
    simbaNfPage:'./pages/simbaNf',
    rddListCraPage:'./pages/rddListCra.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'intranet',

  plugins: {
    login: {
      "require": "./conf/event.js",
      "enabled": true
    },
    allure: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
      seleniumArgs: {
          version: '3.141.5', // Selenium standalone server version
          drivers: {
              chrome: {
                  version: '79.0.3945.36', // Chromedriver version
              },
              firefox: {
                  version: '0.24.0', // Geckodriver version
              },
              MicrosoftEdge: {
                version: '18.17763',
            },
          },
      },
      seleniumInstallArgs: {
          version: '3.141.5',
          baseURL: 'https://selenium-release.storage.googleapis.com',
          drivers: {
              chrome: {
                  version: '79.0.3945.36',
                  arch: process.arch,
                  baseURL: 'https://chromedriver.storage.googleapis.com',
              },
              firefox: {
                version: '0.24.0',
                arch: process.arch,
                baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
              },
              MicrosoftEdge: {
                version: '18.17763',
                arch: process.arch,
                baseURL: 'https://download.microsoft.com/download/F/8/A/F8AF50AB-3C3A-4BC4-8773-DC27B32988DD/',
            },
          },
      },
    }
  }
}