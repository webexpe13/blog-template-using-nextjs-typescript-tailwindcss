/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider, Accordian } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { HowToUseImageCode, HowToUseList, HowToUseSeperator, HowToUseTextCode } from "../../src/constants/codeBlocks";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            <Text title className="mt-10 md:text">
            Unfair for Rob Fair 
            </Text>
            <Accordian title="Longform Narrative"  keepOpen={false}  >
            While pursuing my journalism degree, I conducted a semester-long project with the goal of understanding the struggles homeless individuals endure due to the lack of affordable housing in the U.S. To write my narrative, I first interviewed an individual who works for an organization in Amherst, Massachusetts that helps the homeless find affordable housing. 
            They introduced me to Rob, a homeless individual, who became the main character of my story. 
            I conducted a few interviews with staff at the organization and Rob. 
            To provide more information and context to my readers surrounding the issue of homelessness, I applied statistics from a few secondary sources. 
            After compiling all of this information, I wanted to write about Rob’s story in hopes of connecting my readers to his experience, with the intent of humanizing the issue of homelessness. I have changed the names of all individuals within the narrative for their privacy.
              </Accordian>
            <Image
                  src="/public/images/published/homeless.jpg"
                  alt="homeless"
                  className="my-5"
                />
            <Text p >
            Rob Fair is a 60-year-old man, and you wouldn’t know it if his hair wasn’t grey. 
            His deep blue eyes are filled with light, his smile youthful, his demeanor gentle.  He laughs easily and gestures with cracked hands as he talks. His voice is soft. 
            For almost two years, Rob has been homeless. 
                </Text>
                <Text p >
                But this is not where Rob’s struggles begin. Just like each one of us, Rob has experienced the hardships adulthood brings. Before Rob’s experience with homelessness began, he faced several other challenges. 
                At age eight, Rob was diagnosed with autism. Born and raised in a loving family, he had most of the support he needed. But to Rob, society did not always seem as understanding.
                </Text>
                <Text p >
                In 1977, from age 17 to 20, Rob attended college in Wellesley, but did not end up graduating. 
                Instead, he decided to put his efforts into music and printmaking. 
                For 12 years, living in his hometown of Framingham, Massachusetts, Rob worked tirelessly at a printing company. 
                In 1993, printing went digital, and Rob found himself in need of a new job. As he looked for steady employment, Rob began working odd jobs. To pass the time, he began growing his own crops. 
                </Text>
                <Text quote>
                The company that I printed for didn't want to switch over to computers and there were 100 of us workers with only about 50 jobs for us to fight over. So I said, well, while I’m recovering from this, getting my resume together and figuring out if I had to move someplace else to continue printing, I’m going to grow a garden while I wait
                </Text>
                <Text p >
                In 2002, Rob began running a CSA, a community-supported agriculture project. The CSA system allows for a close and personal relationship between consumer and farmer, where the farmer is paid in advance for a year’s worth of vegetables. 
                The year 2002 was a particularly difficult year for Rob. Both of his parents had passed away, and he was forced to sell his childhood home. Fortunately, the crops he was harvesting were thriving.
                When his partner returned from graduate school, the two set out to start a farm in the town of Montague, where the cost of rent would be cheaper.
                </Text>
                <Text p >
                For a year, the two stayed with an elderly man, from whom they rented a plot of land. Their crops flourished, but their living situation began to take a turn for the worse. On several occasions, Rob began to notice the owner of the farm following him and his partner as they strolled through the fields. Even after he politely requested the strange behavior stop, it never ceased. 
                </Text>
                <Text p >
                The turning point came when the elderly man noticed Rob was using hay to mulch potatoes. The two began to argue over the farming practices and soon the situation escalated. The elderly man seized his shotgun and hollered at the two to leave immediately. Luckily, the farmer who lived next door knew his elderly neighbor was becoming senile and offered the couple his land to farm.
                Rob and his partner worked side-by-side harvesting crops on this land for four years. But in 2008, the two separated. Despite the pain of heartbreak, Rob persevered and continued harvesting food on the same plot for three more years. He even picked up a part-time job at Whole Foods to make sure he had extra money. 
                </Text>
                <Text p >
                In 2011, the farmer who had let Rob work his land for so many years decided to take his plot back. Rob had until the end of the season before it was time for him to relocate again. During his last few months harvesting on this plot, Rob’s farming skills caught a particular man’s eye. At the man’s first few attempts to lure Rob into his expanding farm, Rob was reluctant. But after losing his job at Whole Foods and his plot in Montague, Rob agreed. 
                He began working on a blueberry farm in the town of Worthington. In exchange for being a mentor to these new farmers, Rob was provided with his own rent-free cabin. Within his first few months of managing the farm, Rob and the man who initially recruited him struggled to see eye-to-eye. Their perspectives on farm management diverged.
                Rob grew frustrated. But because of his good nature and patience, Rob tolerated the other farmer until he eventually left. 
                </Text>
                <Text p >
                From that point forward, Rob tried to keep to himself and minimize possible conflicts as he helped run the farm. But soon, he became romantically involved with another farmer. Rob began to build his relationship with this woman around the time a new member decided to settle up in the hills, on the little blueberry farm. 
                This person was a unique addition to the farm, as she claimed to own her own consulting business. 
                </Text>
                <Text quote >
                She had impressed us and said we could finally connect my food growing to a customer base. But she ended up embezzling lots of money from us and that's when I started to lose my fortune
                </Text>
                <Text p >
                I could tell he was just as confused and heartbroken as I was at the sound of this; I knew it was even more painful for him to hear these words spill out of his own mouth, 20 years after they left him in the hole he is still trying to climb out of today. He continuously names this moment “the worst decision he ever made.”
                </Text>
                <Text p >
                He could no longer enjoy the luxuries of the blueberry farm, but he could still fall back into the warmth and comfort of his relationship. With enthusiasm, excitement, and hope, Rob’s partner approached him with an idea that would begin the next chapter of his life. The two of them picked up their belongings, climbed into their car, and took off toward Upstate New York. The couple planned to work at a bed in breakfast, described by Rob as an idea that seemed “too good to be true.” 
                </Text>
                <Text p >
                After arriving in New York, the two decided to settle down, find more jobs and another plot of land to farm. They eventually began farming again. Rob devoted most of his time tending to his crops and animals but also worked a part-time job at the grocery store to make extra money. The longer he lived there with his partner, the more she changed. “I don’t know what happened. She just changed as soon as we moved out there. She never came out of her room; she wouldn’t eat. I had never seen her like that before,” Rob recalled. He wanted to address the cloud that seemed to overcome his home, but he was too preoccupied with work. 
                </Text>
                <Text p >
                Rob worked tirelessly at the grocery store to make sure he had some extra money saved up. The staff at his job recognized this and expressed their gratitude to Rob by awarding him with employee of the month. He was ecstatic. Immediately, his mind went to telling his girlfriend and the enthusiasm they would share. But that moment never came. “I came home and ran up the stairs to tell her,” Rob paused for a second, struggling to find the words to describe the rest of this memory. “...and everything was gone. It was like one of those scenes you see in movies. I was trying to hold it together when I noticed everything was gone, but then I realized she took the cat. I just totally lost it. That was really tough, I’m still not over that.”
                </Text>
                <Text p >
                When Rob realized there was not much left for him in Upstate New York, he decided to, again, pack his bags and relocate. He ended up back in the Town of Montague, where he became the caretaker of The Wisdom School of S.O.P.H.I.A., which taught spiritual and religious education. Ending up at this school was a major turning point in Rob’s life. After spending a short time working at this school, Rob began to notice peculiar practices. He grew distrustful of the school’s teachings and where its money was going. 
                </Text>
                <Text p >
                “One day I opened my eyes and said, ‘I can’t believe I’m in another situation like this.’ So I left and decided to go back to school, that’s when I think I saved myself. I thought, ‘This is the last time I’m ever going to be stuck like this.’”
                </Text>
                <Text p >
                From 2015-2017, with the rest of his money, Rob, age 56, decided to go back to school and take classes at the University of Massachusetts. While he studied at the university, Rob rented a room in a house near campus. Day after day, hour after hour, studying for two years, he finally graduated with a degree in sustainable food. All Rob wanted was to run his own farm business and, even though he knew a lot about growing crops, he decided to obtain a bachelor’s degree in sustainable food to expand his knowledge. “What I want to do is write and be that go-between consumers and farmers because there’s still so much education that needs to be done about what food actually is and where it comes from,” Rob said. 
                </Text>
                <Text p >
                Two weeks after spending thousands on his degree, according to Rob, he was offered a well-paying job running the greenhouses at UMass. He jumped at the offer. With pride and excitement, he began picturing what his life would hold once he began working at the university. But his first day on the job never came. He called the university and sent several emails, but UMass never reached back out to him. All Rob heard was silence. His heart broke. At that point in his life, he realized that he had spent most of his money on pursuing a degree that, at the moment, seemed worthless. This interview was the first out of eight with UMass that would leave Rob questioning his abilities.
                </Text>
                <Text p >
                Two months after graduation, at age 58, Rob became officially homeless. He could not afford to pay for his room in the house anymore and now had to pay back his student loans. Fortunately, he still had his car. To make it more livable, Rob removed the passenger seat and replaced it with a bed he built. Rob found himself frequently spending nights in the Walmart parking lot.
                </Text>
                <Text p >
                “I would park my car in a spot right in front of a tree so I could tell people there was a beautiful oak in my front yard,” Rob said.
                </Text>
                <Text p >
                Although he did not have a permanent home, he still remained employed, working a few minimum-wage jobs. He hoped to hear back from UMass eventually, but in June of 2018, Rob began his job as a gardener at the Jones Library. Rob did not view himself as a “homeless person,” just a man who was experiencing financial struggles.
                </Text>
                <Text p >
                Rob’s predicament is not unique. There are many homeless individuals in Amherst, but also in all parts of Massachusetts. And these numbers will only increase, as the developing housing crisis worsens. Rental prices in Massachusetts have rapidly increased. According to The Herald News, the median price for a one-bedroom apartment in Massachusetts increased by 5.8% since the previous year. Zillow shows that in Amherst specifically, home prices have risen 1.0% since last year. They are predicted to rise by 1.8% within the next year. According to Quinn Breen, a writer for the Amherst Wire, in order to pay rent for a one-person apartment or a single room in Amherst, a yearly income of $18,000 is required. Working a minimum-wage job, that is not achievable. 
                </Text>
                <Text p >
                Rob did everything in his power to avoid the stigma of homelessness. “I didn’t want to stay in a shelter,” he said, “because then I’d really feel homeless. That’s also why I don't like to take food from soup kitchens. I don’t feel homeless enough. But when I do need to visit places like the Amherst Survival Center, I take a few pounds of food so that I do not have to go back for a while.”

In 2019, the cold became unbearable and Rob’s situation remained unchanged. On one April morning, after speaking to a coworker at the Jones Library, he decided to visit the Amherst Housing Authority. In search of subsidized housing, Rob presented his case to them. He did not remain in this facility for long, as they soon directed him to a social service organization called, ACC.
                </Text>
                <Text p >
                ACC provides referrals, case management, outreach, and advocacy services to those in the community who are in need. This organization also helps to provide food, income, and healthcare, hoping to improve the quality of life of its participants. 

Rob stumbled into the facility, soaked from his walk in the pouring rain. Disoriented, he had no clue what to do or say next. A woman sitting at the front desk examined Rob as he stood perplexed in the doorway. “Can I help you?” she said. Rob walked over to her, sat down, and began sharing his story.
                </Text>
                <Text p>
                The name of this woman is Jill. Jill works side by side with ACC’s participants, creating a case for each person in need. She radiates warmth and positivity as she works alongside the director, Mae. Jill always has a side smile plastered on her face and a contagious laugh that could make anyone’s day brighter. As I first entered the small building on the side of main street, Jill’s gaze immediately met with mine. She greeted me with her signature smile and immediately began addressing my concerns. Although Mae does most of the behind-the-scenes work, Jill is commonly recognized as the face of the organization.

                </Text>
                <Text p> 
                Hwei-Ling Greeney, who founded ACC, has been its director for seven years. The organization stemmed from Mae’s leading role at the soup kitchen, Not Bread Alone. After several years of painfully watching people without homes struggle day after day, she realized how affordable housing was essential for their lives and for the community. 

Within five minutes of speaking to Mae, it is easy to view her as a savior. With salt and pepper hair, a sincere smile, and a determined look in her eyes, Mae helps hundreds of ACC participants every year. She knows everything from where to find food for tomorrow to finding a permanent home. 
Every day she works with participants to improve their case and trains volunteers to follow in her footsteps. Her most notable quality is her outlook on homelessness.      
                </Text>
                <Text p>    
                “You see, everyone thinks of the homeless as drunks or addicts, but that is not the case at all,” she said. “Living in this community, it is our job to help provide for those in need.” 

The reason she spends so much of her time training volunteers is not just to have an organized workforce; it is to teach the younger generation the importance of giving back to the community. 

    “We believe working with the next generation will provide meaningful opportunities for student’s career directions but also for the better of the community.” As she speaks to me, she smiles and hope lights her eyes. 
                </Text>
                <Text p>   
                Like Rob, many of the participants at ACC greatly value Mae and the services she provides. “A lot of what Mae told me to do seemed counterintuitive to me, but it worked so I just completely trusted her,” Rob said. “If she said ‘call this place and go over and do this’ I would think, ‘I would never do that’ but she knows better than me. I just trusted her and did whatever she told me to do and I did it as quickly and as well as I could. 
                And every week it seemed everything would graduate to something better.” As Mae stuck by Rob’s side, Rob knew his situation would improve.
                </Text>
                <Text p>     
                Over the course of seven months of frequently visiting ACC, Rob grew close with both Mae and Jill. Rob currently writes a column for ACC about his perspective on homelessness and life in general. “I think Mae saw something in me. Now, it’s almost like they partnered with me because I write for them. I trusted her and she trusted me right away. She says that doesn’t usually happen. It wasn’t always easy; there was a point where I didn't understand how they were going to help me.
                 One day, it just started, and I realized she has all the resources to help people, but she only will if she trusts them,” Rob said.
                </Text>
                <Text p>   
                He continued on, 

“They saw me, they heard me, and they didn't judge me. They were incredibly kind and generous. Do not underestimate human kindness. They helped me with applying to every housing place in this part of the state. Each time I was put on a waiting list and would have to graduate to the next tier of the waiting list. What I got out of all of this was hope. I already have patience from being a farmer my whole life.”   
                </Text>
                <Text p>
                According to both Mae and Rob, perspective on the issue of homelessness is essential. Rob deeply understands the meaning of perspective. He emphasizes the importance of a person’s mindset in times of struggle.  “Nobody tells you this, but you need to have the right perspective and that perspective must be a positive one. This is the only way you can stop struggling and get yourself back on your feet.” During this conversation, Rob made sure to meet his gaze with mine. I could tell that this mindset was getting him through the hardships he had been experiencing for years. He continued on, “I’d like to think of myself as a very positive person. When I was living in my car, I wrote some of the best songs. All I had was myself, my car, and my guitar. I made the best out of those times, but you have to realize when it is time to move on.” 
                Finding Amherst Community Connections was able to lead Rob to the next path of his life. 
                </Text>
                <Text p>
                Rob is not a rarity. There are many other homeless people like him in every community and the numbers are only rising. The Herald News shows that in 2018, in Massachusetts, there was a 20.6% increase in homelessness since 2010. Approximately 20,068 people were homeless. According to the National Alliance to End Homelessness, in Berkshire County specifically, there is an average of 651 people homeless on a given night. 
                For two years, Rob contributed to the statistic.
                </Text>
                <Text p>
                Many people may still be living without homes, but soon, Rob will not be one of them. In late December when his lease begins, Rob will officially have a home. After this, he hopes once he makes enough money that he can earn his master’s degree in agriculture and hopefully become a teacher’s assistant. Without the help of Mae, Jill, and several ACC volunteers, Rob would not be where he is today. But he must be credited. It is not easy to accept the reality of homelessness and turn to an organization for help. 

Although Rob will have a home soon, he has not finished fighting his battles. Towards the end of my second interview with Rob, he began reflecting on his life experiences and the choices he made. He scratched his head and said, “Do you know anything about autism?” I was confused by this question, as it seemed random to me, but managed to tell him I did.
                </Text>
                <Text p>
                “Well, my brain and all the knowledge in it is good. But there’s no talking between what I know and what I do. I think that’s how I ended up where I am today. When I was diagnosed, they didn't know anything about it. Man, the best time to be autistic is being eight years old right now. The two halves of my brain definitely don’t talk neurologically typical. But, there’s a way to; they call it building scaffolding around. You have to have an excellent routine. 
                I can get that routine and whenever I can have some normalcy and schedule in my life, I thrive. But when I’m just lost, I stay lost for long periods of time,” said Rob.
                </Text>
                <Text p>
                As Rob spoke, I could see the sadness leaking from his eyes. He struggled with finding the words to describe his current stance in life, and with that, he struggled to hide the deep sorrow he constantly felt. After he opened up to me, I could see how difficult it must have been to be homeless, to be without routine. However, Rob’s impenetrable perseverance and kindness are what have kept him afloat. His admirable mindset took years to build, as he was constantly learning more and more about himself. Just like the rest of us, Rob is still figuring out who he is today, and just like everyone else, attaching labels to him makes this process even harder. 
                Homeless or not, Rob is human; and looking at the issue of homelessness from his perspective is crucial. 
                </Text>
                <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed mb-0">
                For any any queries related to this interview / blog feel free to connect with me at <u>carriesmith3231@gmail.com</u>.
                You can also connect with me on  <a href="https://www.linkedin.com/in/carrie-smith-89b389198/" target="_blank" rel="noopener noreferrer"><u><i>linkedin</i></u></a>.
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;