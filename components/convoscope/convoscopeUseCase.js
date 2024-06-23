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
import dataPic1 from '../../public/images/dataViz.png'
import speakerHighlight from '../../public/images/speakerHighlight.png'
import participantView from '../../public/images/participantView.png'
import teaserImage from '../../public/images/TeaserImage.png'
import convoPersona from '../../public/images/ResearcherPersona.png'
import wireframes from '../../public/images/wireframes2.png'
import branding from '../../public/images/brandingConvo.png'
import itterationsGreen from '../../public/images/itterationsGreen.png'
import firstPassBlue from '../../public/images/firstPassBlue.png'
import firstPassGreen from '../../public/images/firstPassGreen.png'
import beforeContrast from '../../public/images/beforeContrast.png'
import statsInWords from '../../public/images/statsInWords.png'
import transcriptBefore from '../../public/images/transcriptBefore.png'
import agentsBefore from '../../public/images/agentsBefore.png'
import agentsAFter from '../../public/images/agentsAfter.png'
import data1 from '../../public/images/data1.png'
import data2 from '../../public/images/data2.png'
import data3 from '../../public/images/data3.png'
import data4 from '../../public/images/data4.png'
import heyConvo from '../../public/images/heyConvo.png'
import landingPage from '../../public/images/landingPage.png'
import speakerView from '../../public/images/speakerView.png'
import webpage from '../../public/images/webpage.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';
import NumberedList from '../useCaseGenerics/numberedList';
import BackButton from '../useCaseGenerics/backButton';

import styles from "./useCase.module.css";

// data
import { text } from '../constants/cometConstants.js';
import { takeaways, overviewTextFull, boarder, boarder2} from '../constants/convoscopeConstants';


export default function ConvoscopeUseCase(){
    const [imageSrc, setImageSrc] = useState(processHorizontal);

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

    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="ConvoScope" 
                subheading="Designing an experimental AI interface for MIT Media Lab researchers."
                // image={testVid}
                image={teaserImage}
                />
            <Overview
                myRole="Lead Product Designer – "
                responsibilities="Interaction Design, UX Design, Visual Design, User Flows, Prototyping"
                timeline="Q3, Q4 2023 Design Stage"
                status="Currently in development"
                team={<div>Ayon Bhattacharya, Co-Designer<br/>
                Cayden Pierce,
                PM + SE Lead<br/>
                Alex Israelov, SE Lead<br/>
                Kenji Phang, SE</div>}
                overviewText={overviewTextFull}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Researchers had trouble surfacing relevant information on-the-fly when discussing unfamiliar or new topics."
                // topParagraphHTML={null}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Information must be easy to access, legible and useful."
                topParagraphHTML={<div className={'bodyText'}>With ConvoScope, users don’t waste time entering requests into a search tool. When activated, 
                    the tool listens to the users’ conversation and, with the help of AI, automatically outputs 
                    succinct information, aiding in a <span className={`emphasis`}>deeper understanding of the topic at hand.</span></div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Main screen -</span> Cards flow in from the top, and are pushed out the bottom.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                image1={tempImg}
                image2={dataPic1}
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
                            <div className={`emphasis ${styles.marginBottom}`}>Quick to Scan</div><br />
                            • Cards provide visual separation<br />
                            • Limit of 7-12 words per card body<br />
                            • Typography chosen carefully for legibility<br />
                            • Absence of clutter<br />
                            • Throttled quantity of cards produced<br />
                        </div>
                    </div>}
            />

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
                    <div className={`emphasis ${styles.modeTitle}`}>Speaker Mode</div>
                    <div className={`bodyText ${styles.modeBody}`}>Participants only see cards<br/>selected by the Speaker</div>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Default Mode</div>
                    <div className={`bodyText ${styles.modeBody}`}>All participants see the<br/>full set of cards
                    </div> 
                </div>
            </div>

            <Card
                p1= {<div><span className={`emphasis`}>Speaker View–</span> In Speaker Mode, the speaker selects the cards to highlight.</div> }
            >
                <div className={styles.imageWrapper2}>
                    <Image
                        src={speakerHighlight}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>Participant view–</span> Participants will see only the selected cards.</div>
                </div>

                <div className={styles.imageWrapper2}>
                    <Image
                        src={participantView}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom2}`}>
                    <div>The rationed output will help highlight the most useful information and minimize distractions.</div>
                </div>

            </Card>

            <Card
                p1= {<div><span className={`emphasis`}>“Hey Convo”–</span> Voice interface available for users to ask burning questions.</div> }
                className={`${styles.marginBottomNone} ${styles.marginTopNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <video controls autoplay loop muted width="100%" height="auto">
                        <source src="/video/HeyConvoVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Research"
                sectionSubtitleTxt="An empathetic and research driven approach."
                topParagraphHTML={<div className={'bodyText'}>I conducted user interviews, created personas, incrementally iterated on the design,
                integrated SME and user feedback to hone the best product possible.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Questions Included
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • What  is the biggest pain point related to participating in research discussions?<br />
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
                    Users were much more likely to quickly find the info they needed if the output in the app was <span class="emphasis"> collected, curated, and concise.</span>
                </div>
            </div>

            <Box className={styles.marginTop2} txt='During discussion, students routinely wanted access to supplemental information quickly' icon={bookOpen}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Flow should not be disrupted' icon={alertIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Irrelevant information should be hidden so no time is wasted reading it' icon={eyeOffIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='There was a desire for all information to be collected in a single location' icon={folderIcon}>
            </Box>

            {/* Persona Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Persona
                </div>
                
            </div>{/* Persona image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={convoPersona}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {boarder} 
            
            <SectionTopper
                sectionTitletxt="Ideation"
                sectionSubtitleTxt="Honing in on an impactful solution– step by step."
                topParagraphHTML={<div className={'bodyText'}>Before diving into the more detailed designs, I started with some quick iterations with hand drawn ideas, and moved onto low fidelity wireframes in figma.</div>}
            />

            {/* Minimal Lo-fi Designs Title */}
            {/* <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Minimal Lo-fi Designs
                </div>
            </div> */}
            {/* Minimal Lo-fi Designs image */}
            {/* <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div> */}

            {/* Wireframes Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Wireframes
                </div>
            </div>{/* Wireframes image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframes}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
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
                    <div className={`emphasis ${styles.modeTitle}`}>Weekly Demos</div>
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
                    <Image
                        src={branding}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            {/* Styles and design language */}
            <Card
                p1= {<div><span className={`emphasis`}>Design Language– </span> We decided that the app should have an otherworldly feel, but also evoke harmony, while fitting into an academic context. I prepared and presented two styles to our stakeholder, in order to get a sense of which direction fit the product best.</div>}
                className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={firstPassGreen}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={firstPassBlue}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Initial Directions–</span> At first the stakeholder resquested the green theming. Thus, I continued to iterate on the formatting and other aspects of the application in green. Some iternations shown below. </div>
                </div>
                
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={itterationsGreen}   
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
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
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> At first Users found the contrast in the initial designs difficult to read.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={beforeContrast}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>once color and sizing was dialed in, students were able to read the interface clearly from their seats at the back of the lecture hall in MIT media lab.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={statsInWords}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            
            {/* Before and After: Clean it up */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                    Clean it up
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                The space was cluttered and I  needed to<span class="emphasis"> make the app more breathable</span>, which would in the end make the app more usable.
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The transcript element was distracting to the people I interviewed and deemed unhelpful beyond cuing the listeners that the app was active.</>} icon={thumbsDownIcon}>
            </Box>
            {/* {Before: The transcript element was distracting to the people I interviewed and deemed unhelpful beyond cuing to the listeners that the app was processing the conversation. Other elements that were distracting were XYZ.'} */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={transcriptBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> Removed distracting elements, such as the transcript and the side panels, while maintaining clarity.</>}  icon={thumbsUpIcon}>
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
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>We added a button animation, and text which indicated the app was processing before any cards were created.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottom}`}>
                {/* <Image
                    src={tempImg}
                    alt="Use Case Image"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                }} /> */}
                <video controls autoplay loop muted width="100%" height="auto">
                    <source src="/video/cardFlowStartVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <div className={`sectionOutterContainer ${styles.marginTopNone} ${styles.marginBottom}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                This center animation deliverable took a few iterations due to quality issues encountered with export. Animated PNGs was successful in the end.
                </div>
            </div> */}

            {/* Before and After: Emjoi and Icons*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading}`}>
                    Hone in Imagery
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> Our icons and use of emojis didn't quite fit the design language and proved to be distracting.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>The icons created to replace them fit the look and feel much better. They were rounded, breathable, and identifiable at a glance without being too distracting.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsAFter}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
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
                p1= {<div><span className={`emphasis`}>Landing Page– </span> Start a new session or view archive of past sessions.</div> }
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
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
                    <Image
                        src={data1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data2}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={data3}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2} `}>
                    <Image
                        src={data4}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Hey Convo–</span> Ask convo anything!</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={heyConvo}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
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
                    <div><span className={`emphasis`}>Speaker View–</span> Participants only see info the speaker selects.</div>
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
                    {/* <Image
                        src={tempImg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} /> */}

                    <video controls autoplay loop muted width="100%" height="auto">
                        <source src="/video/SignUpFlow.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopSlim}`}>
                <div className={styles.sectionSubheading}>
                    Style guide
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                I created a style that evoked academia, while also reflecting a moody otherworldly, biological atmosphere requested by the stakeholder. For example, the puffiness of the icons and rounded corners felt more based in nature than harsh edges would. In additon, the font helped<span class="emphasis">  evoke the science fiction vibes that</span> we desired.
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
                Annimations were included to both evoke the sense of otherwordliness, and natural phamana, and to <span class="emphasis"> communicate to the user something was happening.</span> First example of this is the "Hey Convo" feature.
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>
                 In order to avoid the user disrupting their flow and resorting to using other tools, such as as search engine, it was essential to have a feature<span class="emphasis">  allowing impromptu questions.</span> The given animation convays the active listening of ConvoScope, inspired by "Hey Siri."
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls autoplay loop muted width="100%" height="auto">
                    <source src="/video/HeyConvoVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop2}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                An simpler, yet purposeful, annimation is used for the start button during a ConvoScope session. The button pulses like a beating heart to help <span class="emphasis">indicate the session is in progress,</span> even if no cards have apeared yet. The speed was carefully chosen to be slow enough to not be distracting, but fast enough to be noticed.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls autoplay loop muted width="100%" height="auto">
                    <source src="/video/pulsingVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop2}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Another animation worth discussion is on the login screen. The main purpose here is to use an animation inspired by heavenly bodies to <span class="emphasis"> set the tone of the application</span> immediately. The same animation is used at the start of every session.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2} ${styles.marginBottomNone}`}>
                <video controls autoplay loop muted width="100%" height="auto">
                    <source src="/video/LoginAnimation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {boarder}

            <SectionTopper
                sectionTitletxt="Reflections"
                sectionSubtitleTxt="Learn by doing."
                topParagraphHTML={<div className={`bodyText`}>During this design project, I grew my skills an incredible amount. From components, to finding the middle ground with stakeholders,<span className={`emphasis`}> my mind is awash with possibilities </span>for the future.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                Take-aways
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                {/* insert numbered list here */}
                        <NumberedList takeaways={takeaways}>
                        </NumberedList>
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Smart Glasses, Here I Come
                </div>
            </div>
            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                The next iteration will involve creating a <span className={`${styles.whiteTxt}`}>smart glasses</span> interface. <span className={`${styles.whiteTxt}`}>I’m pumped for my next learning journey!</span>
                </div>
            </Card>
            {/* <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Smart glasses require highly focused design work in a constrained environment. Finding ways of <span class="emphasis"> emphasizing hierarchy </span> through spacing, emphasis, and visual interest will be essential.
                </div>
            </div> */}

            {/* {boarder} */}

            <BackButton />

            {/* <TeaserCard title="Thought Filter" description="First designer for a B2B content marketing SaaS tool." image="/images/macx2.png" link={"/thoughtFilter"}></TeaserCard> */}

        </div>
    );
};