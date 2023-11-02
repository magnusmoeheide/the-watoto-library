import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, Side } from "../../components";

const TermsOfSale = () => {
  return (
    <div>
      <Navbar />
      <div className="row" id="flex">
        <Side />
        <div className="main">
          <Link to="/donate#termsofsale">
            <div class="div-back">
              <p class="allNewsLetters">
                <i class="fa-solid fa-arrow-left"></i>Back to Donate
              </p>
            </div>
          </Link>
          <div className="article termsofsale">
            <h2>Terms Of Sale</h2>
            <i>
              These terms of sale apply to the Norwegian payment system Vipps.
            </i>

            <h3>
              <u>Den korte, veiledende versjonen</u>
            </h3>
            <p>
              Vi er pliktet av Vipps å oppgi vilkår for kjøp. Dette er det
              viktigiste:
            </p>
            <ul>
              <li>
                <p>
                  Donasjonene kommer inn til den norskgreistrerte organisasjonen
                  The Watoto Youth Community And Library Norway, org. nr. 931
                  464 817.
                </p>
              </li>
              <li>
                <p>
                  Midlende sendes til biblioteket i Kenya etter behov. Alt blir
                  bokført og den norske organisasjonen overser at midlene blir
                  brukt til formålet.
                </p>
              </li>
              <li>
                <p>
                  Donasjoner kan i utgangspunktet ikke angres, men om det har
                  skjedd en åpenbar feil e.l. skal vi selvfølgelig være
                  behjelpelige med det.
                </p>
              </li>
              <li>
                <p>
                  Månedlige, faste donasjoner kan selvfølgelig stoppes når
                  ønskelig.
                </p>
              </li>
              <li>
                <p>Tusen takk for din donasjon!</p>
              </li>
            </ul>

            <h3>
              <u>Den lange, bindende versjonen</u>
            </h3>
            <h3>Innledning</h3>
            <p>
              Dette kjøpet er regulert av de nedenstående standard
              salgsbetingelser for forbrukerkjøp av varer over Internett.
              Forbrukerkjøp over internett reguleres hovedsakelig av
              avtaleloven, forbrukerkjøpsloven, markedsføringsloven,
              angrerettloven og ehandelsloven, og disse lovene gir forbrukeren
              ufravikelige rettigheter. Lovene er tilgjengelig på
              www.lovdata.no. Vilkårene i denne avtalen skal ikke forstås som
              noen begrensning i de lovbestemte rettighetene, men oppstiller
              partenes viktigste rettigheter og plikter for handelen.
            </p>
            <p>
              Salgsbetingelsene er utarbeidet og anbefalt av Forbrukertilsynet.{" "}
              <a
                href="https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/veiledning-standard-salgsbetingelser-forbrukerkjop-varer-internett"
                target="_blank"
              >
                For en bedre forståelse av disse salgsbetingelsene, se
                Forbrukertilsynets veileder her.
              </a>
            </p>
            <h3>1. Avtalen</h3>
            <p>
              Avtalen består av disse salgsbetingelsene, opplysninger gitt i
              bestillingsløsningen og eventuelt særskilt avtalte vilkår. Ved
              eventuell motstrid mellom opplysningene, går det som særskilt er
              avtalt mellom partene foran, så fremt det ikke strider mot
              ufravikelig lovgivning.
            </p>
            <p>
              Avtalen vil i tillegg bli utfylt av relevante lovbestemmelser som
              regulerer kjøp av varer mellom næringsdrivende og forbrukere.
            </p>
            <h3>2. Partene</h3>
            <p>
              Selger er The Watoto Youth Community And Library Norway,
              magnus@thewatotolibrary.org, +47 95885852, org. nr. 931 464 817,
              og betegnes i det følgende som selger/selgeren.
            </p>
            <p>
              Kjøper er den forbrukeren som foretar bestillingen, og betegnes i
              det følgende som kjøper/kjøperen.
            </p>
            <h3>3. Pris</h3>
            <p>
              Den oppgitte prisen for varen og tjenester er den totale prisen
              kjøper skal betale. Denne prisen inkluderer alle avgifter og
              tilleggskostnader. Ytterligere kostnader som selger før kjøpet
              ikke har informert om, skal kjøper ikke bære.
            </p>
            <h3>4. Avtaleinngåelse</h3>
            <p>
              Avtalen er bindende for begge parter når kjøperen har sendt sin
              bestilling til selgeren. Avtalen er likevel ikke bindende hvis det
              har forekommet skrive- eller tastefeil i tilbudet fra selgeren i
              bestillingsløsningen i nettbutikken eller i kjøperens bestilling,
              og den annen part innså eller burde ha innsett at det forelå en
              slik feil.
            </p>
            <h3>5. Betalingen</h3>
            <p>
              Selgeren kan kreve betaling for varen fra det tidspunkt den blir
              sendt fra selgeren til kjøperen. Dersom kjøperen bruker
              kredittkort eller debetkort ved betaling, kan selgeren reservere
              kjøpesummen på kortet ved bestilling. Kortet blir belastet samme
              dag som varen sendes. Ved betaling med faktura, blir fakturaen til
              kjøperen utstedt ved forsendelse av varen. Betalingsfristen
              fremgår av fakturaen og er på minimum 14 dager fra mottak. Kjøpere
              under 18 år kan ikke betale med etterfølgende faktura.
            </p>
            <h3>6. Levering</h3>
            <p>
              Levering er skjedd når kjøperen, eller hans representant, har
              overtatt tingen. Hvis ikke leveringstidspunkt fremgår av
              bestillingsløsningen, skal selgeren levere varen til kjøper uten
              unødig opphold og senest 30 dager etter bestillingen fra kunden.
              Varen skal leveres hos kjøperen med mindre annet er særskilt
              avtalt mellom partene.
            </p>
            <h3>7. Risikoen for varen</h3>
            <p>
              Risikoen for varen går over på kjøper når han, eller kjøpers
              representant, har fått varene levert i tråd med punkt 6.
            </p>
            <h3>8. Angrerett</h3>
            <p>
              Med mindre avtalen er unntatt fra angrerett, kan kjøperen angre
              kjøpet av varen i henhold til angrerettloven. Kjøperen må gi
              selger melding om bruk av angreretten innen 14 dager fra fristen
              begynner å løpe. I fristen inkluderes alle kalenderdager. Dersom
              fristen ender på en lørdag, helligdag eller høytidsdag forlenges
              fristen til nærmeste virkedag. Angrefristen anses overholdt dersom
              melding er sendt før utløpet av fristen. Kjøper har bevisbyrden
              for at angreretten er blitt gjort gjeldende, og meldingen bør
              derfor skje skriftlig (angrerettskjema, e-post eller brev).
              Angrefristen begynner å løpe: Ved kjøp av enkeltstående varer vil
              angrefristen løpe fra dagen etter varen(e) er mottatt. Selges et
              abonnement, eller innebærer avtalen regelmessig levering av
              identiske varer, løper fristen fra dagen etter første forsendelse
              er mottatt. Består kjøpet av flere leveranser, vil angrefristen
              løpe fra dagen etter siste leveranse er mottatt. Angrefristen
              utvides til 12 måneder etter utløpet av den opprinnelige fristen
              dersom selger ikke før avtaleinngåelsen opplyser om at det
              foreligger angrerett og standardisert angreskjema. Tilsvarende
              gjelder ved manglende opplysning om vilkår, tidsfrister og
              fremgangsmåte for å benytte angreretten. Sørger den
              næringsdrivende for å gi opplysningene i løpet av disse 12
              månedene, utløper angrefristen likevel 14 dager etter den dagen
              kjøperen mottok opplysningene. Ved bruk av angreretten må varen
              leveres tilbake til selgeren uten unødig opphold og senest 14
              dager fra melding om bruk av angreretten er gitt. Kjøper dekker de
              direkte kostnadene ved å returnere varen, med mindre annet er
              avtalt eller selger har unnlatt å opplyse om at kjøper skal dekke
              returkostnadene. Selgeren kan ikke fastsette gebyr for kjøperens
              bruk av angreretten. Kjøper kan prøve eller teste varen på en
              forsvarlig måte for å fastslå varens art, egenskaper og funksjon,
              uten at angreretten faller bort. Dersom prøving eller test av
              varen går utover hva som er forsvarlig og nødvendig, kan kjøperen
              bli ansvarlig for eventuell redusert verdi på varen. Selgeren er
              forpliktet til å tilbakebetale kjøpesummen til kjøperen uten
              unødig opphold, og senest 14 dager fra selgeren fikk melding om
              kjøperens beslutning om å benytte angreretten. Selger har rett til
              å holde tilbake betalingen til han/hun har mottatt varene fra
              kjøperen, eller til kjøper har lagt frem dokumentasjon for at
              varene er sendt tilbake.
            </p>
            <h3>
              9. Forsinkelse og manglende levering - kjøpernes rettigheter og
              frist for å melde krav
            </h3>
            <p>
              Dersom selgeren ikke leverer varen eller leverer den for sent i
              henhold til avtalen mellom partene, og dette ikke skyldes kjøperen
              eller forhold på kjøperens side, kan kjøperen i henhold til
              reglene i forbrukerkjøpslovens kapittel 5 etter omstendighetene
              holde kjøpesummen tilbake, kreve oppfyllelse, heve avtalen
              og/eller kreve erstatning fra selgeren. Ved krav om
              misligholdsbeføyelser bør meldingen av bevishensyn være skriftlig
              (for eksempel e-post).
            </p>
            <h3>Oppfyllelse</h3>
            <p>
              Kjøper kan fastholde kjøpet og kreve oppfyllelse fra selger.
              Kjøper kan imidlertid ikke kreve oppfyllelse dersom det foreligger
              en hindring som selgeren ikke kan overvinne, eller dersom
              oppfyllelse vil medføre en så stor ulempe eller kostnad for selger
              at det står i vesentlig misforhold til kjøperens interesse i at
              selgeren oppfyller. Skulle vanskene falle bort innen rimelig tid,
              kan kjøper likevel kreve oppfyllelse. Kjøperen taper sin rett til
              å kreve oppfyllelse om han eller hun venter urimelig lenge med å
              fremme kravet.
            </p>
            <h3>Heving</h3>
            <p>
              Dersom selgeren ikke leverer varen på leveringstidspunktet, skal
              kjøperen oppfordre selger til å levere innen en rimelig
              tilleggsfrist for oppfyllelse. Dersom selger ikke leverer varen
              innen tilleggsfristen, kan kjøperen heve kjøpet. Kjøper kan
              imidlertid heve kjøpet umiddelbart hvis selger nekter å levere
              varen. Tilsvarende gjelder dersom levering til avtalt tid var
              avgjørende for inngåelsen av avtalen, eller dersom kjøperen har
              underrettet selger om at leveringstidspunktet er avgjørende.
              Leveres tingen etter tilleggsfristen forbrukeren har satt eller
              etter leveringstidspunktet som var avgjørende for inngåelsen av
              avtalen, må krav om heving gjøres gjeldende innen rimelig tid
              etter at kjøperen fikk vite om leveringen.
            </p>
            <h3>Erstatning</h3>
            <p>
              Kjøperen kan kreve erstatning for lidt tap som følge av
              forsinkelsen. Dette gjelder imidlertid ikke dersom selgeren
              godtgjør at forsinkelsen skyldes hindring utenfor selgers kontroll
              som ikke med rimelighet kunne blitt tatt i betraktning på
              avtaletiden, unngått, eller overvunnet følgene av.
            </p>
            <h3>
              10. Mangel ved varen - kjøperens rettigheter og reklamasjonsfrist
            </h3>
            <p>
              Hvis det foreligger en mangel ved varen må kjøper innen rimelig
              tid etter at den ble oppdaget eller burde ha blitt oppdaget, gi
              selger melding om at han eller hun vil påberope seg mangelen.
              Kjøper har alltid reklamert tidsnok dersom det skjer innen 2 mnd.
              fra mangelen ble oppdaget eller burde blitt oppdaget. Reklamasjon
              kan skje senest to år etter at kjøper overtok varen. Dersom varen
              eller deler av den er ment å vare vesentlig lenger enn to år, er
              reklamasjonsfristen fem år. Dersom varen har en mangel og dette
              ikke skyldes kjøperen eller forhold på kjøperens side, kan
              kjøperen i henhold til reglene i forbrukerkjøpsloven kapittel 6
              etter omstendighetene holde kjøpesummen tilbake, velge mellom
              retting og omlevering, kreve prisavslag, kreve avtalen hevet
              og/eller kreve erstatning fra selgeren. Reklamasjon til selgeren
              bør skje skriftlig.
            </p>
            <h3>Retting eller omlevering</h3>
            <p>
              Kjøperen kan velge mellom å kreve mangelen rettet eller levering
              av tilsvarende ting. Selger kan likevel motsette seg kjøperens
              krav dersom gjennomføringen av kravet er umulig eller volder
              selgeren urimelige kostnader. Retting eller omlevering skal
              foretas innen rimelig tid. Selger har i utgangspunktet ikke rett
              til å foreta mer enn to avhjelpsforsøk for samme mangel.
            </p>
            <h3>Prisavslag</h3>
            <p>
              Kjøper kan kreve et passende prisavslag dersom varen ikke blir
              rettet eller omlevert. Dette innebærer at forholdet mellom nedsatt
              og avtalt pris svarer til forholdet mellom tingens verdi i
              mangelfull og kontraktsmessig stand. Dersom særlige grunner taler
              for det, kan prisavslaget i stedet settes lik mangelens betydning
              for kjøperen.
            </p>
            <h3>Heving</h3>
            <p>
              Dersom varen ikke er rettet eller omlevert, kan kjøperen også heve
              kjøpet når mangelen ikke er uvesentlig.
            </p>
            <h3>11. Selgerens rettigheter ved kjøperens mislighold</h3>
            <p>
              Dersom kjøperen ikke betaler eller oppfyller de øvrige pliktene
              etter avtalen eller loven, og dette ikke skyldes selgeren eller
              forhold på selgerens side, kan selgeren i henhold til reglene i
              forbrukerkjøpsloven kapittel 9 etter omstendighetene holde varen
              tilbake, kreve oppfyllelse av avtalen, kreve avtalen hevet samt
              kreve erstatning fra kjøperen. Selgeren vil også etter
              omstendighetene kunne kreve renter ved forsinket betaling,
              inkassogebyr og et rimelig gebyr ved uavhentede varer.
            </p>
            <h3>Oppfyllelse</h3>
            <p>
              Selger kan fastholde kjøpet og kreve at kjøperen betaler
              kjøpesummen. Er varen ikke levert, taper selgeren sin rett dersom
              han venter urimelig lenge med å fremme kravet.
            </p>
            <h3>Heving</h3>
            <p>
              Selger kan heve avtalen dersom det foreligger vesentlig
              betalingsmislighold eller annet vesentlig mislighold fra kjøperens
              side. Selger kan likevel ikke heve dersom hele kjøpesummen er
              betalt. Fastsetter selger en rimelig tilleggsfrist for oppfyllelse
              og kjøperen ikke betaler innen denne fristen, kan selger heve
              kjøpet.
            </p>
            <h3>Renter ved forsinket betaling/inkassogebyr</h3>
            <p>
              Dersom kjøperen ikke betaler kjøpesummen i henhold til avtalen,
              kan selger kreve renter av kjøpesummen etter
              forsinkelsesrenteloven. Ved manglende betaling kan kravet, etter
              forutgående varsel, bli sendt til inkasso. Kjøper kan da bli holdt
              ansvarlig for gebyr etter inkassoloven.
            </p>
            <h3>Gebyr ved uavhentede ikke-forskuddsbetalte varer</h3>
            <p>
              Dersom kjøperen unnlater å hente ubetalte varer, kan selger
              belaste kjøper med et gebyr. Gebyret skal maksimalt dekke
              selgerens faktiske utlegg for å levere varen til kjøperen. Et
              slikt gebyr kan ikke belastes kjøpere under 18 år.
            </p>
            <h3>12. Garanti</h3>
            <p>
              Garanti som gis av selgeren eller produsenten, gir kjøperen
              rettigheter i tillegg til de kjøperen allerede har etter
              ufravikelig lovgivning. En garanti innebærer dermed ingen
              begrensninger i kjøperens rett til reklamasjon og krav ved
              forsinkelse eller mangler etter punkt 9 og 10.
            </p>
            <h3>13. Personopplysninger</h3>
            <p>
              Behandlingsansvarlig for innsamlede personopplysninger er selger.
              Med mindre kjøperen samtykker til noe annet, kan selgeren, i tråd
              med personopplysningsloven, kun innhente og lagre de
              personopplysninger som er nødvendig for at selgeren skal kunne
              gjennomføre forpliktelsene etter avtalen. Kjøperens
              personopplysninger vil kun bli utlevert til andre hvis det er
              nødvendig for at selger skal få gjennomført avtalen med kjøperen,
              eller i lovbestemte tilfelle.
            </p>
            <h3>14. Konfliktløsning</h3>
            <p>
              Klager rettes til selger innen rimelig tid, jf. punkt 9 og 10.
              Partene skal forsøke å løse eventuelle tvister i minnelighet.
              Dersom dette ikke lykkes, kan kjøperen ta kontakt med
              Forbrukertilsynet for mekling. Forbrukertilsynet er tilgjengelig
              på telefon 23 400 600 eller www.forbrukertilsynet.no.
              Europa-Kommisjonens klageportal kan også brukes hvis du ønsker å
              inngi en klage. Det er særlig relevant, hvis du er forbruker
              bosatt i et annet EU-land. Klagen inngis her:
              http://ec.europa.eu/odr.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfSale;
