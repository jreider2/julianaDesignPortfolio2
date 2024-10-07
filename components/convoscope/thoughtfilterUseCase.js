import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Box from '../useCaseGenerics/box';
import NumberedList from '../useCaseGenerics/numberedList';
import BackButton from '../useCaseGenerics/backButton';
import styles from './useCase.module.css';

// Data and constants
import { text, takeaways } from '../constants/thoughtFilterConstants.js';
import { boarder, boarder2 } from '../constants/convoscopeConstants';

export default function ThoughtFilterUseCase() {
  const [imageSrc, setImageSrc] = useState('/images/processHorizontal2.png');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 714) {
        setImageSrc('/images/processVertial2.png'); // Use the vertical image if the viewport width is less than 714
      } else {
        setImageSrc('/images/processHorizontal2.png'); // Otherwise, use the horizontal image
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
        subheading="Designer for a B2B content marketing SaaS tool."
        image="/images/tfProjects.png"
      />
      <Overview
        myRole="Product Designer – "
        responsibilities="Interaction Design, UX Design, Visual Design, User Flows, User Research, and Prototyping"
        timeline="Q1 2024 Design Stage"
        status="V0 Complete"
        team={
          <div>
            Aryik Bhattacharya, SE Architect
            <br />
            Ayon Bhattacharya, PM
            <br />
            Carrie Pack, Marketing SME
            <br />
            Jessalyn Jones, Key Customer
          </div>
        }
        overviewText={text}
      />

      {boarder}

      <SectionTopper
        sectionTitletxt="The Problem"
        sectionSubtitleTxt="Freelance copywriters aim to create engaging think pieces, but often spend most of their time on repetitive long tail articles about uninspiring topics."
        topParagraphHTML={null}
      />

      {boarder}

      <SectionTopper
        sectionTitletxt="Highlights"
        sectionSubtitleTxt="Enhanced workflow efficiency and content quality."
        topParagraphHTML={
          <div className="bodyText">
            This tool not only addresses the critical pain points in content marketing, such as keyword optimization and efficient content reuse but also{' '}
            <span className="emphasis">integrates seamlessly</span> into the daily routines of content creators.
          </div>
        }
      />

      {/* Highlights Section */}
      <Card
        p1={
          <div>
            <span className="emphasis">Input Form-</span> This feature includes a form equipped with essential parameters, allowing users to quickly generate keywords and upload relevant research documents. It facilitates a seamless transition to generating your first draft without any friction.
          </div>
        }
        video1="/video/tfInput.mp4"
        bullets={null}
        className={styles.marginBottomNone}
      />

      <Card
        p1={
          <div>
            <span className="emphasis">Editing-</span> AI-generated suggestions designed to help you refine your document more efficiently.
          </div>
        }
        video1="/video/tfEdit.mp4"
        bullets={null}
      />

      {/* Speaker Mode Icons */}
      <div className={styles.speakerModsWrapper}>
        <div className={styles.middleModContainner}>
          <div className={styles.sModsPicContainer}>
            <Image
              src="/images/filterIcon.png"
              alt="Filter Icon"
              width={96}
              height={80}
              objectFit="contain"
              placeholder="blur"
            />
          </div>
          <div className={`emphasis ${styles.modeTitle}`}>Filter History</div>
          <div className={`bodyText ${styles.modeBody}`}>
            Quickly locate old files that
            <br />
            need to be reworked
          </div>
        </div>
        <div className={styles.middleModContainner}>
          <div className={styles.sModsPicContainer}>
            <Image
              src="/images/searchIconBig.png"
              alt="Search Icon"
              width={96}
              height={80}
              objectFit="contain"
              placeholder="blur"
            />
          </div>
          <div className={`emphasis ${styles.modeTitle}`}>Search History</div>
          <div className={`bodyText ${styles.modeBody}`}>
            Search previous content
            <br />
            by keywords and more
          </div>
        </div>
      </div>

      <Card
        p1={
          <div>
            <span className="emphasis">Project history page–</span> Easily access old content.
          </div>
        }
        className={styles.marginBottomNone}
      >
        <div className={styles.imageWrapper2}>
          <Image
            src="/images/tfProjects.png"
            alt="Project History"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>

        <div className={`bodyText ${styles.cardBody2}`}>
          <div>
            <span className="emphasis">Filter and search–</span> This feature includes a search and filter function on the project history page, enhancing usability. It's especially useful for content marketers who frequently need to find and refresh older content.
          </div>
        </div>
      </Card>

      <Card className={styles.marginBottomNone}>
        <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
          By designing Thoughtfilter, I increased the speed of content marketers writing a new article{' '}
          <span className={styles.whiteTxt}> by 88% on average.</span> The longer the article, the greater increase in time saved.
        </div>
      </Card>

      {boarder}

      {/* Research Section */}
      <SectionTopper
        sectionTitletxt="Research"
        sectionSubtitleTxt="An in-depth exploration into the challenges and workflows of content marketers."
        topParagraphHTML={
          <div className="bodyText">
            In this study, I identified typical workflows and key issues. Direct feedback from users throughout the design process provided valuable insights.
          </div>
        }
      />

      <div className={`sectionOutterContainer ${styles.marginTop}`}>
        <div className={styles.sectionSubheading}>Workflow Insights</div>

        <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
          • <span className="emphasis">Content Creation:</span> our target users typically utilize a systematic approach starting from research notes, followed by building structured outlines. 
          <br />
          • <span className="emphasis">Content Reuse:</span> content marketers are constantly asked to refresh old content to ensure quality and relevance.
          <br />
          • <span className="emphasis">AI Utilization:</span> There is a notable lack of AI tools that effectively integrate keyword optimization without compromising quality.
          <br />
        </div>
      </div>

      <div className={`sectionOutterContainer ${styles.marginTop}`}>
        <div className={styles.sectionSubheading}>Main Insight</div>
      </div>
      <Card className={styles.marginTop3}>
        <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
          Content marketers, especially freelancers, face immense pressure to deliver a{' '}
          <span className={styles.whiteTxt}>high volume of quality content.</span>
        </div>
      </Card>

      <div className={`sectionOutterContainer ${styles.marginTopNone}`}>
        <div className={styles.sectionSubheading}>Other Key Challenges</div>
      </div>

      <Box
        className={styles.marginTop2}
        txt="Context Switching: Frequently shifting between different tasks."
        icon="/images/switchingIcon.png"
      />
      <Box
        className={styles.marginTopSlim}
        txt="SEO and Keyword Optimization: users must increase keyword utilization while avoiding stuffing, and keeping up with Google's algorithm."
        icon="/images/keyIcon.png"
      />
      <Box
        className={styles.marginTopSlim}
        txt="Time Management: common tasks such as transforming ideas into polished content and refreshing stale content is time-consuming."
        icon="/images/clockIcon.png"
      />

      {boarder}

      {/* Ideation Section */}
      <SectionTopper
        sectionTitletxt="Ideation"
        sectionSubtitleTxt="Progressing towards a powerful solution through iterative design."
        topParagraphHTML={
          <div className="bodyText">
            Before diving into the more detailed designs, I started with some quick iterations with hand-drawn ideas, and moved onto low-fidelity wireframes in Figma. 
          </div>
        }
      />

      {/* Wireframes */}
      <div className={`sectionOutterContainer ${styles.marginTop}`}>
        <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>Wireframes</div>
      </div>
      <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
        <Image
          src="/images/tfWireframe.png"
          alt="Wireframes"
          layout="responsive"
          width={1200}
          height={800}
          placeholder="blur"
        />
      </div>

      {/* Iterations and Deliverables */}
      <div className={`sectionOutterContainer ${styles.marginTop5}`}>
        <div className={`${styles.sectionSubheading} ${styles.marginBottom}`}>Iterations and Deliverables</div>
      </div>
      <div
        className={`${styles.speakerModsWrapper} ${styles.marginBottomNone} ${styles.marginTop5} ${styles.marginVpTopSmall} ${styles.marginBottom2}`}
      >
        <div className={styles.middleModContainner}>
          <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
            <Image
              src="/images/figmaIcon.png"
              alt="Figma Icon"
              width={96}
              height={80}
              objectFit="contain"
              placeholder="blur"
            />
          </div>
          <div className={`emphasis ${styles.modeTitle}`}>Design Files</div>
          <div className={`bodyText ${styles.modeBody}`}>
            Utilized Figma and FigJam
            <br />
            to create artifacts
          </div>
        </div>
        <div className={styles.middleModContainner}>
          <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
            <Image
              src="/images/feedbackIcon.png"
              alt="Feedback Icon"
              width={96}
              height={80}
              objectFit="contain"
              placeholder="blur"
            />
          </div>
          <div className={`emphasis ${styles.modeTitle}`}>Engagement</div>
          <div className={`bodyText ${styles.modeBody}`}>
            Gathered continuous feedback
            <br />
            from users
          </div>
        </div>
        <div className={styles.middleModContainner}>
          <div className={`${styles.sModsPicContainer} ${styles.modHeightLimit}`}>
            <Image
              src="/images/peopleIcon.png"
              alt="People Icon"
              width={96}
              height={80}
              objectFit="contain"
              placeholder="blur"
            />
          </div>
          <div className={`emphasis ${styles.modeTitle}`}>Collaborative Development</div>
          <div className={`bodyText ${styles.modeBody}`}>
            Planned a series of meetings with
            <br />
            the developer to ensure quality
          </div>
        </div>
      </div>

      {boarder2}

      {/* Initial Directions */}
      <SectionTopper
        sectionTitletxt="Initial Directions"
        sectionSubtitleTxt="Ready. Set. Brainstorm!"
      />

      {/* Design Directions */}
      <Card className={styles.marginBottomNone}>
        <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
          <div>
            At one point I explored a playful style, containing more saturated colors and sketchy graphics. I left this style behind in favor of a more professional one, so as to avoid distracting design that would impede the use of the tool itself.
          </div>
        </div>

        <div className={styles.imageWrapper2}>
          <Image
            src="/images/direction1.png"
            alt="Design Direction 1"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>

        <div className={`bodyText ${styles.cardBody2}`}>
          <div>
            <span className="emphasis">Honing a design language– </span> I refined the design language of the application through extensive style iterations, focusing on crafting a warm, inviting, and friendly aesthetic that aligns with our branding discussions.
          </div>
        </div>

        <div className={styles.imageWrapper2}>
          <Image
            src="/images/direction2.png"
            alt="Design Direction 2"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>

        <div className={`bodyText ${styles.cardBody2}`}>
          <div>
            I finally landed on this color that is reminiscent of antique paper or paper in classic books, which aligns with the sense of warmth and knowledge I wanted to bring to the product.
          </div>
        </div>

        <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
          <Image
            src="/images/direction3.png"
            alt="Design Direction 3"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>
      </Card>

      {boarder}

      {/* Testing and Improvements */}
      <SectionTopper
        sectionTitletxt="Testing + Improvements"
        sectionSubtitleTxt="Revise, Revise, Revise."
        topParagraphHTML={
          <div className="bodyText">
            To create the optimal product, it's crucial to actively listen to, and prioritize user feedback.<span className="emphasis"> Throughout the design process, I made strategic updates </span>based on this input to maximize the product's impact. Below are some key improvements made during these iterations.
          </div>
        }
      />

      {/* Core Navigation */}
      <div className={`sectionOutterContainer ${styles.marginTop5}`}>
        <div className={styles.sectionSubheading}>Core Navigation</div>
      </div>
      <Box
        className={styles.marginTop2}
        txt={
          <>
            <span className="emphasis">Before: </span> The Navigation was hidden away.
          </>
        }
        icon="/images/thumbsDownIcon.png"
      />
      <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
        <Image
          src="/images/withoutSidebar.png"
          alt="Without Sidebar"
          layout="responsive"
          width={1200}
          height={800}
          placeholder="blur"
        />
      </div>
      <Box
        className={styles.marginTop}
        txt={
          <>
            <span className="emphasis">After: </span> I revised the core navigation paradigm to feel more familiar and stable throughout the app. 
          </>
        }
        icon="/images/thumbsUpIcon.png"
      />
      <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
        <Image
          src="/images/withSidebar.png"
          alt="With Sidebar"
          layout="responsive"
          width={1200}
          height={800}
          placeholder="blur"
        />
      </div>

      {/* Project History Page Development */}
      <div className={`sectionOutterContainer ${styles.marginTop5}`}>
        <div className={styles.sectionSubheading}>Project History Page Development</div>
      </div>
      <Box
        className={styles.marginTop2}
        txt={
          <>
            <span className="emphasis">Before: </span>The application had not addressed the common user habit of switching between many different articles. Instead, it put versioning front and center.
          </>
        }
        icon="/images/thumbsDownIcon.png"
      />
      <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
        <Image
          src="/images/versioningForward.png"
          alt="Versioning Before"
          layout="responsive"
          width={1200}
          height={800}
          placeholder="blur"
        />
      </div>
      <Box
        className={styles.marginTop}
        txt={
          <>
            <span className="emphasis">After:</span> A project/article list is now front and center on the home screen. Versioning will be handled elsewhere.
          </>
        }
        icon="/images/thumbsUpIcon.png"
      />
      <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
        <Image
          src="/images/projectForward.png"
          alt="Project After"
          layout="responsive"
          width={1200}
          height={800}
          placeholder="blur"
        />
      </div>

      {boarder}

      {/* Final Design */}
      <SectionTopper
        sectionTitletxt="Final Design"
        sectionSubtitleTxt="I was pleased with the goals I'd accomplished."
        topParagraphHTML={
          <div className="bodyText">
            The final design of the tool successfully addressed the critical challenges highlighted during the research phase, offering tailored solutions that enhance both efficiency and user satisfaction.
          </div>
        }
      />
      <div className={`sectionOutterContainer ${styles.marginTop}`}>
        <div className={styles.sectionSubheading}>Major screens</div>
      </div>

      {/* Major Screens */}
      <Card
        p1={
          <div>
            <span className="emphasis">Comprehensive AI Tool– </span> Thoughtfilter assists with keyword selection.
          </div>
        }
        className={styles.marginBottomNone}
      >
        <div className={styles.imageWrapper2}>
          <video controls loop muted width="100%" height="auto">
            <source src="/video/tfSuggestionsVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
          <div>
            The AI tool also optimizes content without keyword stuffing, and provides data and recommendations for SEO enhancements.
          </div>
        </div>
        <div className={styles.imageWrapper2}>
          <video controls loop muted width="100%" height="auto">
            <source src="/video/tfInsightsVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom}`}>
          <div>The AI suggestions speed up editing as well.</div>
        </div>

        <div className={styles.imageWrapper2}>
          <Image
            src="/images/editHighlight.png"
            alt="Edit Highlight"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>

        <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom2}`}>
          <div>
            I took inspiration from great writing tools like Notion, Ghost, Obsidian, and iA Writer.
          </div>
        </div>
      </Card>

      <Card
        p1={
          <div>
            <span className="emphasis">Simplified keyword optimization process</span> and document generation all on one screen to minimize context switching and improve efficiency.
          </div>
        }
        className={styles.marginBottomNone}
      >
        <div className={styles.imageWrapper2}>
          <Image
            src="/images/tfInputAndGen.png"
            alt="Input and Generate"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>
        <div className={`bodyText ${styles.cardBody2}`}>
          <div>
            <span className="emphasis">The tool fits into users' existing workflow</span>; research notes can be uploaded as input and it's easy to refresh old content.
          </div>
        </div>
      </Card>

      <Card
        p1={
          <div>
            <span className="emphasis">Project History</span> clearly view past projects, filter, and search for them.
          </div>
        }
      >
        <div className={styles.imageWrapper2}>
          <Image
            src="/images/tfProjectHistory.png"
            alt="Project History"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>
        <div className={`bodyText ${styles.cardBody2}`}>
          <div>
            Empty state and welcome page for new users.
          </div>
        </div>
        <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
          <Image
            src="/images/tfWelcome.png"
            alt="Welcome Page"
            layout="responsive"
            width={800}
            height={600}
            placeholder="blur"
          />
        </div>
      </Card>

      <div className={`sectionOutterContainer ${styles.marginTopSlim}`}>
        <div className={styles.sectionSubheading}>Colors</div>
      </div>
      <div className={`${styles.imageWrapper3} ${styles.marginTop2}`}>
        <Image
          src="/images/tfColorPallet.png"
          alt="Color Palette"
          layout="responsive"
          width={1200}
          height={800}
          placeholder="blur"
        />
      </div>

      {boarder}

      {/* Reflections */}
      <SectionTopper
        sectionTitletxt="Reflections"
        sectionSubtitleTxt="The only real mistake is the one from which we learn nothing."
      />

      <div className={`sectionOutterContainer ${styles.marginTop}`}>
        <div className={styles.sectionSubheading}>Take-aways</div>

        <div className={`bodyText ${styles.indent} ${styles.marginTop2}`}>
          <NumberedList takeaways={takeaways} />
        </div>
      </div>

      <Card className={styles.marginBottomNone}>
        <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
          This is just the tip of the iceberg. Feel free to{' '}
          <span className={styles.whiteTxt}>check out some of my other work! </span>
        </div>
      </Card>

      <BackButton />
    </div>
  );
}