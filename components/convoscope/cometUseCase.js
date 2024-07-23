import React, { useState, useEffect } from 'react';
import Image from "next/image";

import bookOpen from '../../public/images/book-open.png'
import alertIcon from '../../public/images/alert-triangle.png'
import eyeOffIcon from '../../public/images/eye-off.png'
import folderIcon from '../../public/images/folder.png'
import processHorizontal from '../../public/images/processHorizontal2.png'
import processVertical from '../../public/images/processVertial2.png'
import feedbackIcon from '../../public/images/feedbackIcon.png'
import figmaIcon from '../../public/images/figmaIcon.png'
import eyeIcon from '../../public/images/eyeIcon.png'
import thumbsDownIcon from '../../public/images/thumbsDownIcon.png'
import thumbsUpIcon from '../../public/images/thumbsUpIcon.png'
import branchDropdown from '../../public/images/branchDropdown.png'
import contextMenuHover from '../../public/images/contextMenuHover.png'
import undoHover from '../../public/images/undoHover.png'
import empathyMap from '../../public/images/empathyMapComet.png'
import commonFlow from '../../public/images/commonFlowComet.png'
import otherCommonFlows from '../../public/images/otherCommonFlowsComet.png'
import featurePrioritiesComet from '../../public/images/featurePrioritiesComet.png'
import cometThemes from '../../public/images/cometThemes.png'
import darkMode2 from '../../public/images/darkMode2.png'
import approachableColor from '../../public/images/approachableColor.png'
import bigCommit from '../../public/images/bigCommit.png'
import oneFileStaged from '../../public/images/oneFileStaged.png'
import historyPage from '../../public/images/history.png'
import oldGraph from '../../public/images/oldGraph.png'
import oldColors from '../../public/images/oldColors.png'
import tintedCodeBg from '../../public/images/tintedCodeBg.png'
import mainMenuBright from '../../public/images/mainMenuBright.png'
import sketches from '../../public/images/sketches.png'
import cometHero from '../../public/images/cometTeaser.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';
import NumberedList from '../useCaseGenerics/numberedList';
import BackButton from '../useCaseGenerics/backButton';

import styles from "./useCase.module.css";

// data
import { text, takeaways } from '../constants/cometConstants.js';
import { boarder, boarder2} from '../constants/convoscopeConstants';


export default function CometUseCase(){
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
                heading="Comet" 
                subheading="Reimagining the source code management experience."
                // image={testVid}
                image={cometHero}
                />
            <Overview
                myRole="Product Designer – "
                responsibilities="UX Design, Visual Design, Information Architecture, User Flows, User Research"
                timeline="Q2 2024"
                status="MVP Design Complete"
                team={<div>Me, Myself, and I
                </div>}
                overviewText={text}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Using git CLI can be fraught, confusing, and downright annoying."
                topParagraphHTML={<div className={'bodyText'}>And yet, source control is a necessary tool used everyday by most software engineers and is <span className={`emphasis`}>essential to master</span> as an SE student. Many of our users were <span className={`emphasis`}>fed up with existing tooling</span> and found git onerous. They felt git CLI was clunky when performing actions such as undoing mistakes, managing stashes, and viewing committed or staged changes.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="The power you need coupled with the ease you desire."
                topParagraphHTML={<div className={'bodyText'}>With Comet, users don’t waste time memorizing commands, entering them in the wrong order, or taking time to surface useful git log or stash information. Comet results in an <span className={`emphasis`}>approachable, forgiving and straightforward </span>experience.</div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Branch Management Dropdown -</span> In Comet it’s simple to find all the actions related to branch management in one place.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                image1={branchDropdown}
                //image2={dataPic1}
                // video1="/video/cardFlowStartVid.mp4"
                bullets={null}
            >
                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom2} ${styles.marginTopNone}`}>
                    <div>In the branch dropdown, users can view the current branch, check out any existing branch, create a new branch, or merge branches.</div>
                </div>
            </Card>

            {/* Speaker mode icons  */}
            {/* <div className={`${styles.speakerModsWrapper}`}>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Forem ipsum</div>
                    <div className={`bodyText ${styles.modeBody}`}>Forem ipsum dolor<br/>Fsit amet consectetur</div>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Forem ipsum</div>
                    <div className={`bodyText ${styles.modeBody}`}>Forem ipsum dolor<br/>Forem ipsum dolor sit
                    </div> 
                </div>
            </div> */}

            <Card
                className={`${styles.marginBottomNone}`}
                p1= {<div><span className={`emphasis`}>Easy Undo–</span> If a mistake is made, it can be quickly undone using the undo button. This offers a simpler alternative to searching for less frequently used git commands and helps avoid the risk of executing unintentionally destructive commands.</div> }
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={undoHover}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginTopNone}`}>
                    <div><span className={`emphasis`}>Context Menu–</span> When reviewing the commit history, it’s simple to revert, view, or rename commits.</div>
                </div>

                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={contextMenuHover}
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
                sectionTitletxt="Research"
                sectionSubtitleTxt="A detective story for the ages."
                topParagraphHTML={<div className={'bodyText'}>To truly understand my users and avoid assumptions based on personal experience, I conducted interviews, and iteratively refined the design using user feedback. I interviewed engineers at various skill levels to<span className={`emphasis`}> identify friction points</span>  for both beginners and advanced git users, exploring whether their challenges intersected.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                {/* <div className={styles.sectionSubheading}>
                    Questions Included
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • Tell me how you accomplish source code management today.<br />
                • What is the hardest thing about your current workflow?<br />
                • What do you do to solve this problem for yourself today?<br />
                </div>
                <br />
                <br /> */}


                <div className={styles.sectionSubheading}>
                Key quotes
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • I need to quickly use git so I can shift focus to more important tasks.<br />
                • There are no guard rails for the [git CLI]. I’m always wondering what are the best practices. <br />
                • I have to look up syntax all the time.<br />
                • Version control wasn't taught in school. It was just expected that we know how to do it. <br />
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
                Git is essentially a tool used to get important work done. Leveraging it should be quick, easy, and as <span className={`${styles.whiteTxt}`}>frictionless process as possible.</span>
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={styles.sectionSubheading}>
                    Additional Insights
                </div>

                {/* <div className={`bodyText ${styles.marginTop2}`}>
                
                </div> */}
            </div>

            <Box className={styles.marginTop2} txt='Users often struggled to remember git commands, particularly the infrequently used ones or when first learning git.' icon={bookOpen}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Undoing mistakes with git CLI can be arduous and can cause trepidation.' icon={alertIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='The CLI tucks away info that users want quick access to. For example, line-by-line code changes, and which files are staged or committed.' icon={eyeOffIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Users want to be able to manage stashes easily and quickly. Stashing is necessary in many cases.' icon={folderIcon}>
            </Box>
            <Box className={styles.marginTopSlim} txt='Those interviewed wanted to see current changes at a glance.' icon={eyeIcon}>
            </Box>

            {/* Persona Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Research Collation
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={empathyMap}
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
                sectionSubtitleTxt="Go slow to go fast."
                topParagraphHTML={<div className={'bodyText'}>First, I had to clarify which features should make it into the MVP. Then I moved onto quick iterations of designs.</div>}
            />

           {/* User Flows */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    User Flows
                </div>
                <div className={`bodyText ${styles.marginTop2}`}>Leveraging detailed user insights, I identified the most common and essential use case flows. I also documented <span className="emphasis">  sequences in which actions were typically taken</span> so I could create an application that fit into the existing workflow.
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={commonFlow}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={otherCommonFlows}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Building out these flows in visual graphs helped me start to conceptualize the possible the information architecture of the application. I wanted to ensure the IA was intuitive and would <span className="emphasis"> minimize flow disruption.</span>
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={featurePrioritiesComet}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                Once I understood the flows, I mapped out a spectrum of feature priorities from high to low. This process also clarified which features were vital and which could be deferred.
                </div>
            </div>


            {/* Minimal Lo-fi Sketches*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottomNone}`}>
                Minimal Lo-fi Sketches
                </div>
            </div>

            <div className={`sectionOutterContainer`}>
                <div className={`bodyText ${styles.marginTopNone}`}>
                With a clear vision of the MVP featureset and typical use cases in mind, I began with rapid, hand-drawn sketches to maintain flexibility before moving on to low-fidelity wireframes in Figma. This approach allowed for quick comparisons and adjustments, optimizing the design process.
                </div>
            </div>
            
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={sketches}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <div className={`sectionOutterContainer`}>
                <div className={`bodyText ${styles.marginTopNone}`}>
                    Next, I created wireframes to to play with the design in a more detailed manor.
                </div>
            </div>

            {/* Iterations and deliverables Infographic*/}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Iterations and Deliverables
                </div>
            </div>

            <div className={`${styles.speakerModsWrapper} ${styles.marginBottom2} ${styles.marginTop5} ${styles.marginVpTopSmall}`}>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={figmaIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Design Files</div>
                    <div className={`bodyText ${styles.modeBody}`}>Utilized Figma and FigJam for<br/>all design artifacts</div>
                </div>
                <div className={`${styles.middleModContainner}`}>
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
                    <div className={`bodyText ${styles.modeBody}`}>Gathered continuous feedback<br/>from potential users
                    </div> 
                </div>
            </div>

            {/* {boarder} */}
            {boarder2}

            <SectionTopper
                sectionTitletxt="Initial Style Directions"
                sectionSubtitleTxt="From general to specific."
                topParagraphHTML={<div className={'bodyText'}>I started the brainstorming styles by jotting down as many varied descriptors as possible, letting it be a stream of consciousness exercise. There was no wrong answer. From that larger list of general adjectives, I grabbed the ones that had potential, and gathered them into themes.  </div>}
            />

            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={cometThemes} 
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <div className={`sectionOutterContainer`}>
                <div className={`bodyText`}>
                Narrowing down the list still further, I landed on the descriptors of <span className={`emphasis`}>Powerful, Sleek, and Approachable</span>. I then used these words to focus and guide my styling.
                </div>
            </div>

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} `}>
                Color + Theme
                </div>
            </div> 

            {/* Styles and design language */}
            <Card
                p1= {<div><span className={`emphasis`}>Sleek– </span> I opted for the light theme, over a dark one, to evoke an atmosphere of simplicity and, in turn, create an impression of ease of use. Below is the dark theme I breifly considered.</div>}
                className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={darkMode2}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div>The light, bright theme, coupled with the design’s general spaciousness, imparts an air of sleek cleanliness and reflects organization and reliability. The lack of clutter was also an attempt to minimize distraction, given as this app is a means to an end.</div>
                </div>

                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={mainMenuBright}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Evoking Dynamism and Power–</span> Through the use of straight lines and a minimal use of rounded corners.</div>
                </div>
                
                <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={approachableColor}   
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom2}`}>
                    <div><span className={`emphasis`}>Approachable–</span> I chose  pink and purple as interactive colors for approachability, keeping in mind users new to source control.
                    <br/><br/>
                    The colors were also chosen for their contrast against the structural elements, aiding in drawing the user’s eyes to things like CTAs and other interactive elements. </div>
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Testing + Improvements"
                sectionSubtitleTxt="When you really want great design, you will find it waiting for you—after many revisions."
                topParagraphHTML={<div className={`bodyText`}>Throughout the design process, I made <span className={`emphasis`}> strategic updates based on feedback </span>to maximize the product's impact. Below are some key improvements made during these iterations.</div>}
            />

            {/* Before and After: Primary CTA Button */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                    Primary CTA Button
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> The commit button, which is the main CTA for the changes screen, was actually drawing too much focus, and it became distracting.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={bigCommit}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span>I made the CTA smaller. This allowed for a balance to be struck. The eye was still drawn to the primary CTA without it being overly distracting.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={oneFileStaged}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            
            {/* Before and After: Streamling the tree design*/}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading}`}>
                Streamling the tree design
                </div>
            </div>

            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> I included a graphical representation of the tree branches of all the forks for a given repository, available in the commit history screen.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={oldGraph}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span> Based on user feedback, I learned that much of the info portrayed in the tree was ignored; mostly users wanted to know which commit was associated with which branch. Therefore, I represented the relevent data in a more simplified sleek mannor instead, using color coordination as the key.</>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={historyPage}
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
                color Refinement
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The colors in light mode were either too saturated, or there was not enough contrast and things became muddled.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={oldColors}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tintedCodeBg}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>

            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> I brightened up the colors which better reflected my themes of sleekness and approachability.</>}  icon={thumbsUpIcon}>
            </Box>

            {/* <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The code background was saturated similar to the menu and the commit panel. But the UI felt muddled overall.</>} icon={thumbsDownIcon}>
            </Box> */}
            {/* <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> I landed on a brighter look that made the app feel sharper on the whole.</>}  icon={thumbsUpIcon}>
            </Box> */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={oneFileStaged}
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
                sectionSubtitleTxt="Complexity hidden under the hood."
                topParagraphHTML={<div className={`bodyText`}><span className={`emphasis`}></span>Comet is powerful enough to handle all the necessary git capabilities, but simple enough that people new to git will find it approachable, manageable, and easy to learn.</div>}
            />
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                    Major Screens
                </div>
            </div>

            {/* 5 major screens */}
            <Card
                className={`${styles.marginBottomNone}`}
                p1= {<div><span className={`emphasis`}>Main Menu– </span> The welcome screen allows users to quickly do the most common initial actions of cloning, creating, or opening exisiting repositories. Additionally, a list of recent repos are available for efficient access.</div> }
            >
                <div className={`${styles.imageWrapper2}`}>
                    <Image
                        src={mainMenuBright}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Drop Downs–</span>  All actions related to branches are located in one place. All actions related to reposities are located in one place as well. The use of drop downs alows this complexity to be hidden away until the user needs it.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom1}`}>
                    <Image
                        src={branchDropdown}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`${styles.imageWrapper2}`}>
                    <video controls autoPlay loop muted width="100%" height="auto">
                        <source src="/video/mergeVidNew.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Commit History–</span> Easily manage commits on the history page. Context menu on hover provides a quick revert, view, and rewrite of one's commits.</div>
                </div>
                {/* <div className={`${styles.imageWrapper2} ${styles.marginBottom}`}>
                    <Image
                        src={contextMenuHighlight}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div> */}
                <div className={`${styles.imageWrapper2}`}>
                    <video controls autoPlay loop muted width="100%" height="auto">
                        <source src="/video/contextMenuVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}>Changes Screen–</span> Swiftly view file updates, and stage or unstage them on this screen.</div>
                </div>
                <div className={`${styles.imageWrapper2}`}>
                    <video controls autoPlay loop muted width="100%" height="auto">
                        <source src="/video/stageUnstageVidNew.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}></span> The four most commonly used action buttons are positioned together, including the CTA, whose contrasting color draws the eye.</div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <video controls autoPlay loop muted width="100%" height="auto">
                        <source src="/video/commitHoverVidNew.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Card>
        
            {boarder}

            <SectionTopper
                sectionTitletxt="Reflections"
                sectionSubtitleTxt="Mirror, mirror, on the wall."
                topParagraphHTML={<div className={`bodyText`}>Here are my main takeaways from this process, which highlight both the<span className={`emphasis`}> achievements and future opportunities for Comet.</span></div>}
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

            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                But this is just the beginning of my story. <span className={`${styles.whiteTxt}`}>Check out some of my other chapters. :) </span>
                </div>
            </Card>

            <BackButton />

        </div>
    );
};