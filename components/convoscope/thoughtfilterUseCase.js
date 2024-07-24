import React, { useState, useEffect } from 'react';
import Image from "next/image";

import keyIcon from '../../public/images/keyIcon.png'
import clockIcon from '../../public/images/clockIcon.png'
import switchingIcon from '../../public/images/switchingIcon.png'
import filterIcon from '../../public/images/filterIcon.png'
import searchIconBig from '../../public/images/searchIconBig.png'
import figmaIcon from '../../public/images/figmaIcon.png'
import peopleIcon from '../../public/images/peopleIcon.png'
import processHorizontal from '../../public/images/processHorizontal2.png'
import processVertical from '../../public/images/processVertial2.png'
import feedbackIcon from '../../public/images/feedbackIcon.png'
import thumbsDownIcon from '../../public/images/thumbsDownIcon.png'
import thumbsUpIcon from '../../public/images/thumbsUpIcon.png'
import projectHistory from '../../public/images/tfProjectHistory.png'
import wireframe from '../../public/images/tfWireframe.png'
import branding from '../../public/images/tfBranding.png'
import direction1 from '../../public/images/direction1.png'
import direction2 from '../../public/images/direction2.png'
import direction3 from '../../public/images/direction3.png'
import withoutSidebar from '../../public/images/withoutSidebar.png'
import withSidebar from '../../public/images/withSidebar.png'
import versioningBefore from '../../public/images/versioningForward.png'
import projectAfter from '../../public/images/projectForward.png'
import tfColorPallet from '../../public/images/tfColorPallet.png'
import editHighlight from '../../public/images/editHighlight.png'
import welcomePage from '../../public/images/tfWelcome.png'
import InputAndGen from '../../public/images/tfInputAndGen.png'
import projects from '../../public/images/tfProjects.png';

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';
import NumberedList from '../useCaseGenerics/numberedList';
import BackButton from '../useCaseGenerics/backButton';

import styles from "./useCase.module.css";

// data
import { text, takeaways } from '../constants/thoughtFilterConstants.js';
import { boarder, boarder2} from '../constants/convoscopeConstants';


export default function ThoughtFilterUseCase(){
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
                heading="ThoughtFilter" 
                subheading="First designer for a B2B content marketing SaaS tool."
                // image={testVid}
                image={projects}
                />
            <Overview
                myRole="Product Designer – "
                responsibilities="Interaction Design, UX Design, Visual Design, User Flows, User Research, and Prototyping"
                timeline="Q1 2024 Design Stage"
                status="Currently in Development"
                team={<div>Ayon Bhattacharya, SE Architect<br />
                Carrie Pack, SME
                </div>}
                overviewText={text}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="Freelance copywriters aim to create engaging think pieces, but often spend most of their time on repetitive long tail articles about uninspiring topics."
                topParagraphHTML={<div className={'bodyText'}>And yet, source control is a necessary tool used everyday by most software engineers and is <span className={`emphasis`}>essential to master</span> as an SE student. Many of our users were <span className={`emphasis`}>fed up with existing tooling</span> and found git onerous. They felt git CLI was clunky when performing actions such as undoing mistakes, managing stashes, and viewing committed or staged changes.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Enhanced workflow efficiency and content quality."
                topParagraphHTML={<div className={'bodyText'}>This tool not only addresses the critical pain points in content marketing, such as keyword optimization and efficient content reuse but also <span className={`emphasis`}>integrates seamlessly</span> into the daily routines of content creators.</div>}
            />

            <Card
                p1= {<div><span className={`emphasis`}>Input Form-</span> This feature includes a form equipped with essential parameters, allowing users to quickly generate keywords and upload relevant research documents. It facilitates a seamless transition to generating your first draft without any friction.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                //image1={tempImg}
                //image2={dataPic1}
                video1="/video/tfInput.mp4"
                bullets={null}
            ></Card>

            {/* Speaker mode icons  */}
            <div className={`${styles.speakerModsWrapper}`}>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={filterIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Filter History</div>
                    <div className={`bodyText ${styles.modeBody}`}>Quickly locate old files that<br/>need to be reworked</div>
                </div>
                <div className={styles.middleModContainner}>
                    <div className={styles.sModsPicContainer}>
                        <Image
                            src={searchIconBig}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Search History</div>
                    <div className={`bodyText ${styles.modeBody}`}>Search previous content<br/>by keywords and more
                    </div> 
                </div>
            </div>

            <Card
                p1= {<div><span className={`emphasis`}>Editing-</span> AI-generated suggestions designed to help you refine your document more efficiently.</div> }
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                // image1={tempImg}
                //image2={dataPic1}
                video1="/video/tfEdit.mp4"
                bullets={null}
                className={`${styles.marginBottomNone}`}
            ></Card>

            <Card
                p1= {<div><span className={`emphasis`}>Project history page–</span> Easily access old content.</div> }
                className={`${styles.marginBottomNone}`}
            >
                <div className={styles.imageWrapper2}>
                    <Image
                        src={projects}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>Filter and search–</span> This feature includes a search and filter function on the project history page, enhancing usability. It's especially useful for content marketers who frequently need to find and refresh older content.</div>
                </div>
            </Card>

            {boarder}

            <SectionTopper
                sectionTitletxt="Research"
                sectionSubtitleTxt="An in-depth exploration into the challenges and workflows of content marketers."
                topParagraphHTML={<div className={'bodyText'}>In this study, I identified typical workflows and key issues. Direct feedback from users  throughout the design process, provided valuable insights.</div>}
            />

            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                Workflow Insights
                </div>

                <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
                • <span className={`emphasis`}>Content Creation:</span> our target users typically utilize a systematic approach starting from research notes, followed by building structured outlines. <br />
                • <span className={`emphasis`}>Content Reuse:</span> content marketers are constantly asked to refresh old content to ensure quality and relevance.<br />
                • <span className={`emphasis`}>AI Utilization:</span> There is a notable lack of AI tools that effectively integrate keyword optimization without compromising originality.<br />
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
                Content marketers, especially freelancers, face immense pressure to deliver a <span className={`${styles.whiteTxt}`}>high volume of quality content.</span>
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
                <div className={styles.sectionSubheading}>
                    Other Key Challenges
                </div>
            </div>

            
            <Box className={styles.marginTop2} txt='Context Switching: Frequently shifting between different tasks.' icon={switchingIcon}>
                {/* <div>
                    <span className={overviewStyles.emphasis}>Context Switching:</span> Frequently shifting between different tasks is challenging.
                </div> */}
            </Box>
            <Box className={styles.marginTopSlim} txt="SEO and Keyword Optimization: users must increase keyword utilization while avoiding poaching or stuffing, and keeping up with Google's algorithm." icon={keyIcon}>
                {/* <div>
                    <span className={overviewStyles.emphasis}>SEO and Keyword Optimization:</span> must balance keyword use while avoiding poaching or stuffing, and keeping up with Google's algorithm.
                </div> */}
            </Box>
            <Box className={styles.marginTopSlim} txt='Time Management: common tasks such as transforming ideas into polished content and refreshing stale content is time-consuming.' icon={clockIcon }>
                {/* <div>
                    <span className={overviewStyles.emphasis}>Time Management:</span> Transforming an idea into polished content or the common task of content reuse is time-consuming.
                </div> */}
            </Box>

            {boarder} 
            
            <SectionTopper
                sectionTitletxt="Ideation"
                sectionSubtitleTxt="Progressing towards a powerful solution through iterative design."
                topParagraphHTML={<div className={'bodyText'}>Before diving into the more detailed designs, I started with some quick iterations with hand drawn ideas, and moved onto low fidelity wireframes in figma. </div>}
            />

            {/* Wireframes Title */}
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Wireframes
                </div>
            </div>{/* Wireframes image */}
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={wireframe}
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
                Before advancing to intricate design concepts, I began with rapid iterations of hand-drawn sketches and progressed to creating low-fidelity wireframes in Figma.
                </div>
            </div>

            {/* Iterations and deliverables Infographic*/}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>
                    Iterations and Deliverables
                </div>
            </div>
            <div className={`${styles.speakerModsWrapper} ${styles.marginBottomNone} ${styles.marginTop5} ${styles.marginVpTopSmall} ${styles.marginBottom2}`}>
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
                    <div className={`emphasis ${styles.modeTitle}`}>Engagement</div>
                    <div className={`bodyText ${styles.modeBody}`}>Gathered continuous feedback<br/>from users
                    </div> 
                </div>
                <div className={styles.middleModContainner}>
                    <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
                        <Image
                            src={peopleIcon}
                            alt="Use Case Image"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <div className={`emphasis ${styles.modeTitle}`}>Collaborative Development</div>
                    <div className={`bodyText ${styles.modeBody}`}>Planned a series of meetings with <br/>the developer to ensure quality</div>
                </div>  
            </div>

            {/* {boarder} */}
            {boarder2}

            <SectionTopper
                sectionTitletxt="Initial Directions"
                sectionSubtitleTxt="Ready. Set. Brainstorm!"
                topParagraphHTML={<div className={'bodyText'}>Time for a branding exsercise. I utilized branding exercises to <span className={`emphasis`}>define the application's visual</span> and interactive <span className={`emphasis`}>identity</span> ensuring consistency and alignment with user needs and preferences.</div>}
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
                className={`${styles.marginBottomNone}`}
            >
                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div> <span className={`emphasis`}>Initial Directions– </span>
                    At one point I explored a playful style, containing more saturated colors and sketchy graphics. I left this style behind in favor of more professional one, so as to avoid distracting design that would impede the use of the tool itself.</div>
                </div>

                <div className={`${styles.imageWrapper2}`}>
                    <Image
                        src={direction1}   
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>Honing a design language– </span> I refined the design language of the application through extensive style iterations, focusing on crafting a warm, inviting, and friendly aesthetic that aligns with our branding discussions.
                    </div>
                </div>

                <div className={`${styles.imageWrapper2}`}>
                    <Image
                        src={direction2}   
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <div>
                        I finally landed on this color that is reminiscent of antique paper or paper in classic books, which aligns with sense of warmth and knowledge I wanted to bring to the product.
                    </div>
                </div>
                
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={direction3}   
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
                sectionSubtitleTxt="Revise, Revise, Revise."
                topParagraphHTML={<div className={`bodyText`}>To create the optimal product, it's crucial to actively listen to, and prioritize user feedback.<span className={`emphasis`}> Throughout the design process, I made strategic updates </span>based on this input to maximize the product's impact. Below are some key improvements made during these iterations.</div>}
            />

            {/* Before and After: Core Navigation */}
            <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                Core Navigation
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> The Navigation was hidden away.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={withoutSidebar}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span> I  revised the core navigation paradigm to feel more familiar and stable throughout the app.  </>} icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={withSidebar}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>


            {/* Before and After: Versioning */}
            {/* <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={`${styles.sectionSubheading}`}>
                Versioning
                </div>
            </div> */}
            {/* <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> Put emphasis on the current work instead of the full set of variations since I determined that was more valuable for the users.</>}  icon={thumbsUpIcon}>
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
            </div> */}
            

            {/* Before and After: Editing improvements*/}
            {/* <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`${styles.sectionSubheading}`}>
                Editing improvements
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span> Editing was manual and didn’t take advantage of the power of AI to optimize the editing process. </>} icon={thumbsDownIcon}>
            </Box> */}
            {/* <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div> */}
            {/* <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After: </span> I revised the editing screen to include sleek AI editing tools. The tools will make using the app a more focused and joyful writing experience.</>} icon={thumbsUpIcon}>
            </Box> */}
            {/* <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={agentsAFter}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div> */}
            {/* <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={`bodyText ${styles.marginTop2}`}>
                I took inspiration from great writing tools like notion, ghost, obsidian and IAwriter.
                </div>
            </div> */}
            

            {/* Before and After: Project History Page development */}
                        <div className={`sectionOutterContainer ${styles.marginTop5}`}>
                <div className={styles.sectionSubheading}>
                Project History Page Development
                </div>
            </div>
            <Box className={`${styles.marginTop2}`} txt={<><span className={`emphasis`}>Before: </span>The application had not addressed the common user habit of switching between many different articles. Instead it put versioning front and center.</>} icon={thumbsDownIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={versioningBefore}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
            </div>
            <Box className={`${styles.marginTop}`} txt={<><span className={`emphasis`}>After:</span> A project/article list is now front and center on the home screen. Versioning will be handled elsewhere.</>}  icon={thumbsUpIcon}>
            </Box>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={projectAfter}
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
                sectionSubtitleTxt="I was pleased with the goals I'd accomplished."
                topParagraphHTML={<div className={`bodyText`}><span className={`emphasis`}></span>The final design of the tool successfully addressed the critical challenges highlighted during the research phase, offering tailored solutions that enhance both efficiency and user satisfaction.</div>}
            />
            <div className={`sectionOutterContainer ${styles.marginTop}`}>
                <div className={styles.sectionSubheading}>
                Major screens
                </div>
            </div>
 
            {/* 5 major screens */}
            <Card
                p1= {<div><span className={`emphasis`}>Comprehensive AI Tool– </span> Thougthfilter assists with keyword selection. </div> }
                className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.imageWrapper2}`}>
                    <video controls loop muted width="100%" height="auto">
                        <source src="/video/tfSuggestionsVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}></span>The AI tool also optimizes content without keyword stuffing, and provides data and recommendations for SEO enhancements. </div>
                </div>
                <div className={`${styles.imageWrapper2}`}>
                    <video controls loop muted width="100%" height="auto">
                        <source src="/video/tfInsightsVid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
                    <div><span className={`emphasis`}></span>The AI suggestions speed up editing as well. </div>
                </div>

                <div className={`${styles.imageWrapper2}`}>
                    <Image
                        src={editHighlight}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>

                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom2}`}>
                    <div><span className={`emphasis`}></span>I took inspiration from great writing tools like notion, ghost, obsidian and IAwriter.</div>
                </div>

            </Card>
            <Card
                p1= {<div><span className={`emphasis`}>Simplified keyword optimization process</span> and document generation all on one screen to minimize context switching and improve efficiency.</div> }
                className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.imageWrapper2} `}>
                    <Image
                        src={InputAndGen}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}>The tool fits into users' existing workflow</span>; research notes can be uploaded as input and it's easy to refresh old content. </div>
                </div>

            </Card>

            <Card
                p1= {<div><span className={`emphasis`}>Project History</span> clearly view past projects, filter and search for them.</div> }
            >
                <div className={`${styles.imageWrapper2} `}>
                    <Image
                        src={projectHistory}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                <div className={`bodyText ${styles.cardBody2}`}>
                    <div><span className={`emphasis`}></span>Empty state and welcome page for new users. </div>
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={welcomePage}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
            </Card>

            <div className={`sectionOutterContainer ${styles.marginTopSlim}`}>
                <div className={styles.sectionSubheading}>
                    Colors
                </div>
            </div>
            <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
                    <Image
                        src={tfColorPallet}
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
                sectionTitletxt="Reflections"
                sectionSubtitleTxt="The only real mistake is the one from which we learn nothing."
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
                This is just the tip of the iceberg. Feel free to <span className={`${styles.whiteTxt}`}>check out some of my other work! </span>
                </div>
            </Card>

            <BackButton />

        </div>
    );
};