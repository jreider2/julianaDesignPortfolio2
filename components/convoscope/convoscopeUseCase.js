import React, { useState, useEffect } from 'react';
import Image from "next/image";

import eye from '../../public/images/eye.png'
import speakerIcon from '../../public/images/SpeakerIcon.png'
import bookOpen from '../../public/images/book-open.png'
import alertIcon from '../../public/images/alert-triangle.png'
import eyeOffIcon from '../../public/images/eye-off.png'
import folderIcon from '../../public/images/folder.png'
import processHorizontal from '../../public/images/processHorizontal2.png'
import processVertical from '../../public/images/processVertial2.png'
import artifactsIcon from '../../public/images/artifactsIcon.png'
import feedbackIcon from '../../public/images/feedbackIcon.png'
import thumbsDownIcon from '../../public/images/thumbsDownIcon.png'
import thumbsUpIcon from '../../public/images/thumbsUpIcon.png'
import styleTyleMain from '../../public/images/StyleTile.png'
import tempImg from '../../public/images/mainScrene.png'
import landingPage from '../../public/images/landingPage.png'
import speakerView from '../../public/images/speakerView.png'
import webpage from '../../public/images/webpage.png'
import mobileScreens from '../../public/images/convoscopeCover.png'
import placeholder from '../../public/images/convoscopePlaceholder1.png'
//test commit 

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';
import NumberedList from '../useCaseGenerics/numberedList';
import BackButton from '../useCaseGenerics/backButton';

import styles from "./useCase.module.css";

// data
import { takeaways, overviewTextFull, boarder, boarder2} from '../constants/convoscopeConstants';

const images = {
  convoHero: () => import('../../public/images/convoHero.png'),
  tempImg: () => import('../../public/images/mainScrene.png'),
  dataPic1: () => import('../../public/images/dataViz.png'),
  speakerHighlight: () => import('../../public/images/speakerHighlight.png'),
  participantView: () => import('../../public/images/participantView.png'),
  convoPersona: () => import('../../public/images/ResearcherPersona.png'),
  wireframes: () => import('../../public/images/wireframes2.png'),
  branding: () => import('../../public/images/convoBranding2.png'),
  firstPassGreen: () => import('../../public/images/firstPassGreen.png'),
  firstPassBlue: () => import('../../public/images/firstPassBlue.png'),
  itterationsGreen: () => import('../../public/images/itterationsGreen.png'),
  beforeContrast: () => import('../../public/images/beforeContrast.png'),
  statsInWords: () => import('../../public/images/statsInWords.png'),
  transcriptBefore: () => import('../../public/images/transcriptBefore.webp'),
  agentsBefore: () => import('../../public/images/agentsBefore.png'),
  agentsAfter: () => import('../../public/images/agentsAfter.png'),
  data1: () => import('../../public/images/data1.png'),
  data2: () => import('../../public/images/data2.png'),
  data3: () => import('../../public/images/data3.png'),
  data4: () => import('../../public/images/data4.png'),
  heyConvo: () => import('../../public/images/heyConvo.png'),
  // You can add other images here later
};

export default function ConvoscopeUseCase(){
    const [imageSrc, setImageSrc] = useState(processHorizontal);
    const [convoHeroImage, setConvoHeroImage] = useState(null);
    const [tempImage, setTempImage] = useState(null);
    const [dataImage1, setDataImage1] = useState(null);
    const [speakerHighlightImage, setSpeakerHighlightImage] = useState(null);
    const [participantViewImage, setParticipantViewImage] = useState(null);
    const [convoPersonaImage, setConvoPersonaImage] = useState(null);
    const [wireframesImage, setWireframesImage] = useState(null);
    const [brandingImage, setBrandingImage] = useState(null);
    const [firstPassGreenImage, setFirstPassGreenImage] = useState(null);
    const [firstPassBlueImage, setFirstPassBlueImage] = useState(null);
    const [itterationsGreenImage, setItterationsGreenImage] = useState(null);
    const [beforeContrastImage, setBeforeContrastImage] = useState(null);
    const [statsInWordsImage, setStatsInWordsImage] = useState(null);
    const [transcriptBeforeImage, setTranscriptBeforeImage] = useState(null);
    const [agentsBeforeImage, setAgentsBeforeImage] = useState(null);
    const [agentsAfterImage, setAgentsAfterImage] = useState(null);
    const [data1Image, setData1Image] = useState(null);
    const [data2Image, setData2Image] = useState(null);
    const [data3Image, setData3Image] = useState(null);
    const [data4Image, setData4Image] = useState(null);
    const [heyConvoImage, setHeyConvoImage] = useState(null);
    

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 714) {
          setImageSrc(processVertical); // Use the vertical image if the viewport width is less than 700
        } else {
          setImageSrc(processHorizontal); // Otherwise, use the horizontal image
        }
      };
  
      // Set the initial image based on the current window size
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      images.convoHero().then(img => setConvoHeroImage(img.default));
      images.tempImg().then(img => setTempImage(img.default));
      images.dataPic1().then(img => setDataImage1(img.default));
      images.speakerHighlight().then(img => setSpeakerHighlightImage(img.default));
      images.participantView().then(img => setParticipantViewImage(img.default));
      images.convoPersona().then(img => setConvoPersonaImage(img.default));
      images.wireframes().then(img => setWireframesImage(img.default));
      images.branding().then(img => setBrandingImage(img.default));
      images.firstPassGreen().then(img => setFirstPassGreenImage(img.default));
      images.firstPassBlue().then(img => setFirstPassBlueImage(img.default));
      images.itterationsGreen().then(img => setItterationsGreenImage(img.default));
      images.beforeContrast().then(img => setBeforeContrastImage(img.default));
      images.statsInWords().then(img => setStatsInWordsImage(img.default));
      images.transcriptBefore().then(img => setTranscriptBeforeImage(img.default));
      images.agentsBefore().then(img => setAgentsBeforeImage(img.default));
      images.agentsAfter().then(img => setAgentsAfterImage(img.default));
      images.data1().then(img => setData1Image(img.default));
      images.data2().then(img => setData2Image(img.default));
      images.data3().then(img => setData3Image(img.default));
      images.data4().then(img => setData4Image(img.default));
      images.heyConvo().then(img => setHeyConvoImage(img.default));
    }, []);

    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="ConvoScope" 
                subheading="Augmenting cross-disciplinary collaboration for researchers with AI."
                image={mobileScreens || placeholder}
                />
            <Overview
                myRole="Lead Product Designer – "
                responsibilities="Interaction Design, UX Design, Visual Design, User Flows, Prototyping"
                timeline="Q3, Q4 2023 Design Stage"
                status="Deployed to Early Customers"
                team={<div>Ayon Bhattacharya, Product Designer<br/>
                Cayden Pierce,
                PM<br/>
                Alex Israelov, SE Lead<br/>
                Kenji Phang, SE<br/>
                And More...
                </div>}
                overviewText={overviewTextFull}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Researchers had trouble efficiently surfacing relevant information on-the-fly when discussing unfamiliar or new topics."
                topParagraphHTML={<div className={'bodyText'}>Googling questions during lab meetings resulted in valuable time spent digging through numerous sources, as well as verbose or irrelevant information. This caused a <span className={`emphasis`}>major disruption in the flow</span> of their conversations.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Information must be easy to access, concise and useful."
                topParagraphHTML={<div className={'bodyText'}>With ConvoScope, users don’t waste time entering requests into a search tool. When activated, 
                    the tool listens to the users’ conversation and, with the help of AI, automatically outputs 
                    succinct information, aiding in a <span className={`emphasis`}>deeper understanding of the topic at hand.</span></div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Main screen -</span> Cards flow in from the top, and are pushed out the bottom.</div> }

                image1={tempImage} // Use the dynamically loaded tempImg
                image2={dataImage1} // Use the dynamically loaded dataPic1
                video1="/video/cardFlowStartVid.mp4"
                bullets={
                <div className={`bodyText ${styles.bulletContainer}`}>
                        <div>
                            <span className={`emphasis ${styles.marginBottom}`}>Key Features</span><br />
                            • Information is easy to access<br />
                            • Definition of key terms<br />
                            • Fact checks + corrections<br />
                            • Expert opinions<br />
                            • Oppositional theories + more<br />
                        </div>
                        <div>
                            <span className={`emphasis ${styles.marginBottom}`}>Quick to Scan</span><br />
                            • Cards provide visual separation<br />
                            • Limit of 7-12 words per card body<br />
                            • Typography chosen carefully for legibility<br />
                            • Absence of clutter<br />
                            • Throttled quantity of cards produced<br />
                        </div>
                    </div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Video Sessions–</span> Convoscope augments in-person meetings, or a presentation in the classroom. It also allows for remote collaboration with video chat, desktop and mobile.</div> }
                className={`${styles.marginBottom2} ${styles.marginTopNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    {mobileScreens && (
                        <Image
                            src={mobileScreens}
                            alt="Speaker Highlight"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} 
                        />
                    )}
                </div>
            </Card>

            {/* Speaker mode icons  */}
            <div className={`${styles.speakerModsWrapper}`}>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={speakerIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Remote Collaboration</div>
                    <div className={`bodyText ${styles.modeBody}`}>Convoscope helps remote<br/>participants stay in sync</div>
                </div>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={eye}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>In-Person Collaboration</div>
                    <div className={`bodyText ${styles.modeBody}`}>Enhancing live collaborations<br/> with real-time insights
                    </div> 
                </div>
            </div>

            <Card
                p1= {<div><span className={`emphasis`}>Speaker View–</span> In Speaker Mode, the speaker selects the cards to highlight.</div> }
            >
                <div className={styles.imageWrapper2}>
                    {speakerHighlightImage && (
                        <Image
                            src={speakerHighlightImage}
                            alt="Speaker Highlight"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} 
                        />
                    )}
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>Participant view–</span> Participants will see only the selected cards.</div>
                </div>

                <div className={styles.imageWrapper2}>
                    {participantViewImage && (
                        <Image
                            src={participantViewImage}
                            alt="Participant View"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} 
                        />
                    )}
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom2}`}>
                    <div>The rationed output will help highlight the most useful information and minimize distractions.</div>
                </div>

            </Card>

            <Card
                p1= {<div><span className={`emphasis`}>“Hey Convo”–</span> A voice interface is available for users to ask burning questions.</div> }
                className={`${styles.marginBottomNone} ${styles.marginTopNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <video controls loop muted width="100%" height="auto">
                        <source src="/video/HeyConvoVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Card>

            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                By using convoscope during research conversations, there was a <span className={`${styles.whiteTxt}`}> 137% increase in the number of insights</span> revealed per conversation.
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Research"
                sectionSubtitleTxt="An empathetic and research driven approach."
                topParagraphHTML={<div className={'bodyText'}>I conducted user interviews, created personas, incrementally iterated on the design, and
                integrated SME and user feedback to hone the best product possible.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Questions Included
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • What is the biggest pain point related to participating in research discussions?<br />
                • What other solutions or workarounds have you tried?<br />
                • What do you like about how you currently solve your pain point?<br />
                • Do you feel this design was made for you? Why or why not?<br />
                • What's the single most important thing we could do to make ConvoScope better?<br />
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Main Insight
                </div>
            </div>
            <Card
            className={`${styles.marginTop3}`}>
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                    Current tooling produced <span className={`${styles.whiteTxt}`}>too much irrelevant information</span> to sort through in a timely manor.
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={styles.sectionSubheading}>
                    Additional Insights
                </div>

                <div className={`bodyText ${styles.marginTop2}`}>
                    Users were much more likely to quickly find the info they needed if the output in the app was <span className="emphasis"> collected, curated, and concise.</span>
                </div>
            </div>

            <Box className={styles.marginTop2} txt='During discussion, students routinely wanted access to supplemental information quickly.' icon={bookOpen}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Flow should not be disrupted.' icon={alertIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Irrelevant information should be hidden so no time is wasted reading it.' icon={eyeOffIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='There was a desire for all information to be collected in a single location.' icon={folderIcon}>
            </Box>

            {/* Persona Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Persona
                </div>
                
            </div>{/* Persona image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                {convoPersonaImage && ( // Check if the image is loaded
                    <Image
                        src={convoPersonaImage} // Use the dynamically loaded image
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} 
                    />
                )}
            </div>

            {boarder} 
            
            <SectionTopper
                sectionTitletxt="Ideation"
                sectionSubtitleTxt="Honing in on an impactful solution– step by step."
                topParagraphHTML={<div className={'bodyText'}>Before diving into the more detailed designs, I started with some quick iterations with hand drawn ideas, and moved onto low fidelity wireframes in figma. Developers also shared their ideas and perspectives at this stage.</div>}
            />

            {/* Wireframes Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Wireframes
                </div>
            </div>{/* Wireframes image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                {wireframesImage && ( 
                    <Image
                    src={wireframesImage}
                    alt="Use Case Image"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                    }} />
                )}
            </div>
            
            {/* Iterations and deliverables Infographic*/}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Iterations and Deliverables
                </div>
            </div>
            <div className={`${styles.speakerModsWrapper} ${styles.marginBottomNone} ${styles.marginTop5} ${styles.marginVpTopSmall}`}>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={speakerIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Frequent Demos</div>
                    <div className={`bodyText ${styles.modeBody}`}>Presentations of current designs<br/>and prototypes</div>
                </div>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={feedbackIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Iterative Feedback</div>
                    <div className={`bodyText ${styles.modeBody}`}>Gathered continuous feedback<br/>from users and devs
                    </div> 
                </div>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={artifactsIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Artifacts Delivered</div>
                    <div className={`bodyText ${styles.modeBody}`}>Figma designs, animations,<br/>and style guides</div>
                </div>  
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} `}>
                    Process
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                    In reality, <span className="emphasis">handoff is not a moment, it's an ongoing event</span>. Adjustments to the design are best practice and I proactively gather feedback from colleagues and users to inform iterations.
                </div>
            </div> {/*Process image infographic  */}

            <div className={`${styles.imageWrapper2} ${styles.marginSides1} ${styles.marginBottomNone} ${styles.processContainer}`}>
                    <Image
                        src={imageSrc}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {/* {boarder} */}
            {boarder2}

            <SectionTopper
                sectionTitletxt="Initial Directions"
                sectionSubtitleTxt="The look and feel of the app was undefined as of yet."
                topParagraphHTML={<div className={'bodyText'}>The main stakeholder had some great ideas for for the look and feel of the app, but we needed to narrow it down. We started with a branding exercise where we <span className={`emphasis`}> defined and refined</span> our general style direction. </div>}
            />

            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                {brandingImage && (
                    <Image
                        src={brandingImage}
                        alt="Use Case Image"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                    }} />
                )}
            </div>

            {/* Styles and design language */}
            <Card
                p1= {<div><span className={`emphasis`}>Design Language– </span> We decided that the app should have an otherworldly feel, but also evoke harmony, while fitting into an academic context. I prepared and presented two styles to our stakeholder, in order to get a sense of which direction fit the product best.</div>}
                className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    {firstPassGreenImage && (
                        <Image
                            src={firstPassGreenImage}
                            alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                    )}
                </div>

                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    {firstPassBlueImage && (
                        <Image
                            src={firstPassBlueImage}
                            alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                    )}
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Initial Directions–</span> At first the stakeholder resquested the green theming. Thus, I continued to iterate on the formatting and other aspects of the application in green. Some iternations shown below. </div>
                </div>
                
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    {itterationsGreenImage && (
                        <Image
                            src={itterationsGreenImage}   
                            alt="Use Case Image"
                            sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                                objectFit: "contain"
                            }} />
                    )}
                </div>

                
                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>New Direction–</span> In the end, we went with a combination of the two styles. The softer cleaner visual style fit our branding goals of serious and harmonious and the blue color theme was chosen for better contrast and legibility overall. </div>
                </div>

                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Testing + Improvements"
                sectionSubtitleTxt="The path of successful design never did run smooth."
                topParagraphHTML={<div className={`bodyText`}>In order to have the best product possible, eliciting, and prioritizing feedback are paramount. During the course of design iterations,<span className={`emphasis`}>  I updated the design based on feedback in order to have the largest impact. </span> Following are a handful of those improvements.</div>}
            />

            {/* Before and After: Incread Legibility */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                    Increased Legibility
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> At first users found the contrast in the initial designs difficult to read.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    {beforeContrastImage && (
                        <Image
                            src={beforeContrastImage}
                            alt="Use Case Image"
                            sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                                objectFit: "contain"
                            }} />
                    )}
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>Once color and sizing were dialed in, students were able to read the interface clearly from their seats at the back of the MIT media lab.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    {statsInWordsImage && (
                        <Image
                            src={statsInWordsImage}
                            alt="Use Case Image"
                            sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                                objectFit: "contain"
                            }} />
                    )}
            </div>
            
            {/* Before and After: Clean it up */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                    Clean it up
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                The space was cluttered and I  needed to<span className="emphasis"> make the app more breathable</span>, which would in the end make the app more usable.
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The transcript element was distracting to the people I interviewed and deemed unhelpful beyond cuing the listeners that the app was active.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                {transcriptBeforeImage && (
                    <Image
                        src={transcriptBeforeImage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                )}
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> I enhanced clarity by removing distracting elements, such as the transcript and side panels.</>}  icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>I added a button animation and text, which indicated the app was processing before any cards were created.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottom}`}>
                <video controls loop muted width="100%" height="auto">
                    <source src="/video/cardFlowStartVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Before and After: Emjoi and Icons*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading}`}>
                    Hone in Imagery
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> Our icons and use of emojis didn't quite fit the design language and proved to be distracting.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                {agentsBeforeImage && (
                    <Image
                        src={agentsBeforeImage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                )}
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>The icons selected to replace them fit the look and feel much better. They were rounded, breathable, and identifiable at a glance without being too distracting.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                {agentsAfterImage && (
                    <Image
                        src={agentsAfterImage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                )}
            </div>

            {boarder}

            <SectionTopper
                sectionTitletxt="Final Design"
                sectionSubtitleTxt="I was proud of what I had created."
                topParagraphHTML={<div className={`bodyText`}><span className={`emphasis`}></span>After many iterations and experimentations, here are some of the elements I wish to highlight.</div>}
            />
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Major Screens
                </div>
            </div>

            {/* 5 major screens */}
            <Card
                p1= {<div><span className={`emphasis`}>Landing Page– </span> Start a new session or view an archive of past sessions.</div> }
            >
                <div className={`${styles.imageWrapper2} `}>
                    <Image
                        src={landingPage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Data Visualizations–</span> Make statistics and data display in a more visual format for quicker consumption. </div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    {data1Image && (
                        <Image
                            src={data1Image}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                    )}  
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    {data2Image && (
                        <Image
                            src={data2Image}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                    )}
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    {data3Image && (
                        <Image
                            src={data3Image}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                    )}
                </div>
                <div className={`${styles.imageWrapper2} `}>
                    {data4Image && (
                        <Image
                            src={data4Image}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                            }} />  
                    )}
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Hey Convo–</span> Ask convo anything!</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    {heyConvoImage && (
                        <Image
                            src={heyConvoImage}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                    )}
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>See More Info–</span> Click the "More" button for a card to display the source webpage.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={webpage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Speaker View–</span> Participants only see the info that the speaker selects.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={speakerView}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>                    


                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Sign Up–</span> Sign Up Flow and First time Use. </div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <video controls loop muted width="100%" height="auto">
                        <source src="/video/signUpFlow.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopSlim}`}>
                <div className={styles.sectionSubheading}>
                    Style guide
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                I created a style that evoked academia, while also reflecting a moody, otherworldly, biological atmosphere requested by the stakeholder. For example, the puffiness of the icons and rounded corners felt more based in nature than harsh edges would. In additon, the font helped<span className="emphasis">  evoke the science fiction vibes that</span> we desired.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={styleTyleMain}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {/* animations */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                    Animations
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                Annimations were included to both evoke the sense of otherwordliness, and natural phamana, and to <span className="emphasis"> communicate to the user something was happening.</span> First example of this is the "Hey Convo" feature.
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                 In order to avoid the user disrupting their flow and resorting to using other tools, such as as search engine, it was essential to have a feature<span className="emphasis">  allowing impromptu questions.</span> The given animation convays the active listening of ConvoScope, inspired by "Hey Siri."
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls loop muted width="100%" height="auto">
                    <source src="/video/HeyConvoVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop2}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                An simpler, yet purposeful, annimation is used for the start button during a ConvoScope session. The button pulses like a beating heart to help <span className="emphasis">indicate the session is in progress,</span> even if no cards have apeared yet. The speed was carefully chosen to be slow enough to not be distracting, but fast enough to be noticed.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls loop muted width="100%" height="auto">
                    <source src="/video/pulsingVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop2}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Another animation worth discussion is on the login screen. The main purpose here is to use an animation inspired by heavenly bodies to <span className="emphasis"> set the tone of the application</span> immediately. The same animation is used at the start of every session.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls loop muted width="100%" height="auto">
                    <source src="/video/LoginAnimation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {boarder}

            <SectionTopper
                sectionTitletxt="Reflections"
                sectionSubtitleTxt="Learn by doing."
                topParagraphHTML={<div className={`bodyText`}>During this design project, I grew my skills an incredible amount. From creating components, to finding the middle ground with stakeholders,<span className={`emphasis`}> my mind is awash with possibilities </span>for the future.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                Takeaways
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                {/* insert numbered list here */}
                        <NumberedList takeaways={takeaways}>
                        </NumberedList>
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Looking Forward
                </div>
            </div>
            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                    I’m pumped to continue my learning journey; <span className={`${styles.whiteTxt}`}>I wonder where my next steps will take me.</span>
                </div>
            </Card>
            {/* <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Smart glasses require highly focused design work in a constrained environment. Finding ways of <span className="emphasis"> emphasizing hierarchy </span> through spacing, emphasis, and visual interest will be essential.
                </div>
            </div> */}

            <BackButton />

        </div>
    );
};