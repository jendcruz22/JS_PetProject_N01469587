// VARIABLES
var results, i;

// OBJECT OF AN ARRAY OF SYMPTOM OBJECTS
let objs = {
    symptoms: [
        {   
            name: "Fever or Chills",
            isOrNot: true,
            description: "Fever is a common symptom of COVID-19. However, not everyone who develops COVID-19 will experience fever. Some other common symptoms include cough, fatigue, and loss of smell or taste.Fever causes the body temperature to rise above normal levels. This is part of the body’s immune response to infection.",
            url: "https://www.medicalnewstoday.com/articles/covid-19-and-fever"
        },
        {
            name: "Cough",
            isOrNot: true,
            description: "If you develop a dry cough, it’s very possible that you could simply be dealing with allergies, being inside all day (ahem, working from home), or other environmental factors.But it may also be pointing to COVID-19—so it’s important to pay attention to other signs of the virus, too. According to the Centers for Disease Control and Prevention, those symptoms can include but are not limited to: Fever or chills, Cough, Shortness of breath or difficulty breathing, Fatigue, Muscle or body aches, Headache, New loss of taste or smell, Sore throat, Congestion or runny nose, Nausea or vomiting, Diarrhea.",
            url: "https://www.prevention.com/health/a31927676/what-does-dry-cough-mean/"
        } ,
        {
            name: "Cold",
            isOrNot: true,
            description: "Cold and COVID-19 have some similarities. Both develop as a result of a respiratory virus,  spreading from person to person through droplets that come from the nose and mouth. However, it is  important to remember that they are different. A person can develop COVID-19 as a result of contracting the SARS-CoV-2 virus, which is a type of  coronavirus. There are fourTrusted Source coronaviruses that most often cause the common cold in humans.  SARS-CoV-2, however, causes a different illness. Compared with colds, COVID-19: has a longerTrusted Source potential incubation periodcauses more varied symptoms has a higher risk of complications and fatality",
            url: "https://www.medicalnewstoday.com/articles/common-cold-vs-covid-19#are-they-similar"
        } ,
        {
            name: "Shortness of breath or difficulty breathing",
            isOrNot: true,
            description: "The coronavirus that causes COVID-19 attacks the lungs and respiratory system, sometimes resulting in significant damage. COVID-19 often leads to pneumonia and even acute respiratory distress syndrome (ARDS), a severe lung injury. Recovering lung function is possible but can require therapy and exercises for months after the infection is treated.",
            url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/coronavirus-recovery-breathing-exercises"
        } ,
        {
            name: "Fatigue",
            isOrNot: true,
            description: "Even though fatigue is a less well-known symptom of COVID-19, it’s one of the early signs of the disease and more common than the ‘classic’ symptoms of cough, fever and loss of smell (anosmia).Fatigue in COVID-19 is not the same as normal feelings of being tired or sleepy. It’s a type of extreme tiredness or feeling ‘wiped out’ that persists despite resting or getting a good night's sleep. If you have fatigue, you may notice it occurs even after small tasks and limits your usual day-to-day activity. It can feel difficult to walk up stairs, do normal chores or even to get out of bed. Fatigue related to COVID-19 can also make it hard to concentrate or remember things - people sometimes describe it as having ‘brain fog’. It’s important to remember that feeling more tired than usual is common when you’re fighting off any infection, not just coronavirus. And many of us have also seen dramatic changes to our lives including our routines, how we work, and look after children and older relatives, which may also affect how tired we feel. So although many people with COVID-19 experience severe tiredness, most people who feel tired or worn out will not have COVID-19. ",
            url: "https://covid.joinzoe.com/post/covid-symptoms-fatigue-tiredness"
        } ,
        {
            name: "Muscle or body aches",
            isOrNot: true,
            description: "Unusual muscle pains can be an early symptom of COVID-19, often appearing at the very start of the illness. Usually, it lasts for an average of two to three days but can take longer to go away the older you are. This is commonly up to four days for children, five days for adults aged 16-35, seven days for adults aged 35-65 and up to eight days for adults over 65. Unfortunately, COVID-related muscle pains can sometimes last much longer, and are commonly reported in people with long COVID or post-COVID syndrome.",
            url: "https://covid.joinzoe.com/post/are-muscle-pains-a-symptom-of-covid-19"
        } ,
        {
            name: "Headache",
            isOrNot: true,
            description: "A headache is a potential symptom of COVID-19. What point in the infection it typically occurs is still being determined.To date, a headache has been reportedTrusted Source both early and late in the infection phase, with a later headache possibly being associated with worsening illness.A headache can also be a symptom of COVID-19 in people with migraine. In these cases, headaches have been reported Trusted Source as occurring prior to the onset of more typical COVID-19 symptoms, like fever and cough.",
            url: "https://www.healthline.com/health/is-headache-a-sign-of-coronavirus#headache-as-symptom"
        } ,
        {
            name: "Loss of taste or smell",
            isOrNot: true,
            description: "It’s not uncommon for upper respiratory infections such as the common cold or flu to affect our senses of smell and taste. In fact, it’s estimated that a temporary loss of smell happens in over 60 percentTrusted Source of colds and sinus infections.Your sense of taste and sense of smell are closely linked. In fact, experiencing a loss of smell can greatly impact your sense of taste. It’s estimated that 95 percent of the time when there’s a loss of taste, it’s associated with a reduced sense of smell.Loss of smell can occur suddenly in people with COVID-19 and is often accompanied by loss of taste. Also, with COVID-19, these symptoms may occur without a runny or stuffy nose.It’s possible that a loss of smell or taste could be an early symptom of COVID-19. A recent reviewTrusted Source evaluated eight studies with a total of 11,054 COVID-19 patients. According to this review, a loss of smell and taste often happened prior to other COVID-19 symptoms.In particular, a loss of smell may also be a potential indicator of a mild case of COVID-19. ",
            url: "https://www.healthline.com/health/coronavirus-loss-of-taste-loss-of-smell#cause"
        } ,
        {
            name: "Sore throat",
            isOrNot: true,
            description: "Even though a sore throat is a less well-known symptom of COVID-19, it’s an early sign of the disease and reasonably common in children and adults up to the age of 65. People using the app have reported having a sore throat that feels similar to what you might experience during a cold or laryngitis.   COVID-related sore throats tend to be relatively mild and last no more than five days. A very painful sore throat that lasts more than five days may be something else such as a bacterial infection, so don’t be afraid to contact your GP if the problem persists. It’s important to remember that sore throats are common and caused by lots of respiratory illnesses such as normal colds. So although many people with COVID-19 experience sore throats, most people with a sore throat will not have COVID-19.",
            url: "https://covid.joinzoe.com/post/covid-symptoms-sore-throat"
        } ,
        {
            name: "Congestion or runny nose",
            isOrNot: true,
            description: "A runny nose can be a symptom of COVID-19. The Centers for Disease Control and Prevention (CDC) note that a runny nose can be a symptom of COVID-19 in both childrenTrusted Source and adultsTrusted Source.There are multiple variantsTrusted Source of SARS-CoV-2. According to the Washington State Department of Health, a runny nose is rarely a symptom of COVID-19 that is due to previous variants of the virus, but it can occur.However, according to recent evidence, a runny nose may be a main symptom of COVID-19 that results from the recently discovered delta variant.",
            url: "https://www.medicalnewstoday.com/articles/runny-nose-and-covid#is-it-a-symptom"
        } ,
        {
            name: "Nausea or vomiting",
            isOrNot: true,
            description: "Once any virus infects your body, it can destroy healthy cells and make multiple copies of itself. COVID-19 mainly attacks the cells lining your airways. This makes it hard for you to breathe and can lead to pneumonia. But researchers think the illness also may harm your digestive tract and liver tissue.Lack of appetite is the most common symptom, followed by loss or taste and smell. About 13% experience diarrhea, lasting an average of 5 days.Those with digestive symptoms were more likely to have a positive stool test for the coronavirus, which means they had SARS-CoV-2 RNA in their poop. It also took them longer to clear the virus from their bodies, compared to those without gastrointestinal symptoms.",
            url: "https://www.webmd.com/lung/covid19-digestive-symptoms#1"
        } ,
        {
            name: "Diarrhea",
            isOrNot: true,
            description: "Even though diarrhoea is a less well-known symptom of COVID-19, it affects a reasonable proportion of people during their illness. Having COVID-19 diarrhoea alongside many other symptoms is associated with an increased risk of needing hospital support.Diarrhoea caused by COVID-19 is similar to the upset tummy you might get from a regular stomach bug, such as rotavirus or norovirus. Diarrhoea is common in children and adults and usually clears up by itself. We think COVID-19 causes diarrhoea because the virus can invade cells in the gut and disrupt its normal function. COVID-19 can be transmitted through poo and contaminated surfaces or hands. It’s critically important to wash your hands thoroughly and regularly clean bathrooms if you, anyone you live with, or someone you’re caring for has diarrhoea, to prevent the infection spreading. ",
            url: "https://covid.joinzoe.com/post/covid-symptoms-diarrhoea"
        } ,
        {
            name: "Fainting",
            isOrNot: false,
            description: "However, if you experience unexplained fainting, light-headedness, dizziness, balance problems or a sensation that the room is spinning, you need to be evaluated by health professionals. These symptoms have a wide range of possible causes that can be managed in the ER.",
            url: "https://www.ucsfhealth.org/education/12-non-covid-symptoms-you-shouldnt-ignore"
        } ,
        {
            name: "Loss of vision",
            isOrNot: false,
            description: "However, abrupt loss of vision in one or both eyes, either with or without pain, could be a sign of stroke or a serious blockage of blood flow to the eye.",
            url: "https://www.ucsfhealth.org/education/12-non-covid-symptoms-you-shouldnt-ignore"
        } ,
        {
            name: "Stomach pain",
            isOrNot: false,
            description: "However, a number of emergency problems – including appendicitis, pancreatitis, a flare-up of inflammatory bowel disease (IBD), diverticulitis, an intestinal blockage or an infection – may be indicated by abdominal pain that begins suddenly or gradually but worsens over time, particularly if accompanied by symptoms such as nausea, vomiting, diarrhea, abdominal tenderness, swelling or bloody stools.",
            url: "https://www.ucsfhealth.org/education/12-non-covid-symptoms-you-shouldnt-ignore"
        } ,
        {
            name: "Swelling in the face or mouth",
            isOrNot: false,
            description: "However, sudden swelling of your face, lips or throat or sudden difficulty swallowing, breathing or speaking may indicate a serious allergic reaction. Even if you used an EpiPen, you should be evaluated in the ER because the condition can worsen quickly.",
            url: "https://www.ucsfhealth.org/education/12-non-covid-symptoms-you-shouldnt-ignore"
        }
    ]
};

/** processVal Function
 * Converts a given string to lower case and removes any space between words.
 * Returns a formatted string.
 * @param {string} input
 */
 function processVal(input) {
    var input  = input.toLowerCase().replace(/\s/g, "");
    return input;
}

// FUNCTION TO TEST THE PROCESS VAL FUNCTION
function testProcessVal(input, expRes) {
    var result = processVal(input);

    if(result === expRes) {
        outputCol = "green";
        outputVal = "==PASSED==";
    }
    else {
        outputCol = "red";
        outputVal = "xxFAILEDxx";
    }

    let opString = "Value tested: "+input+"  Expected result: "+expRes+" <span style='color: "+outputCol+"'>"+outputVal+"<br />";
    let msg = document.getElementById("test1resOp");
    msg.innerHTML +=opString;
}

testProcessVal("Once upon a time in a land FAR FAR AWAY", "onceuponatimeinalandfarfaraway");
testProcessVal("My HUMBER ID is..... N1046987766", "myhumberidis.....n1046987766");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
/** checkInput Function
 * This function checks if a given input value is anything but a string.
 * Returns 'Empty string' if a given input is an empty string, 'Not a string' if the input is a number or a string with numbers, and 'Valid' if the given string is valid.
 * @param {string} input
 */
 // FUNCTION TO CHECK IF INPUT IS VALID
 function checkInput(input) {
    var output;
    var regEx = /\d/.test(input);
    console.log(regEx);
    if(input === "") {
        output = "Empty string";
    }
    else if (regEx === true) {
        output = "Not a string";
    }
    else {
        output = "Valid";
    }
    return output;
}

// FUNCTION TO CHECK THE GIVEN INPUT
function testCheckInput(input, expRes){
    var result = checkInput(input);

    if(result === expRes) {
        outputCol = "green";
        outputVal = "==PASSED==";
    }
    else {
        outputCol = "red";
        outputVal = "xxFAILEDxx";
    }

    let opString = "Value tested: "+input+"  Expected result: "+expRes+" <span style='color: "+outputCol+"'>"+outputVal+"<br />";
    let msg = document.getElementById("test2resOp");
    msg.innerHTML +=opString;

}

testCheckInput(123, 'Not a string');
testCheckInput('', 'Empty string');
testCheckInput('Hello123@', 'Not a string');
testCheckInput('This IS A test stringgggggggg', 'Valid');

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
/** checkIfExists Function
 * This function checks if a given input value is anything but a string.
 * Returns 'Empty string' if a given input is an empty string, 'Not a string' if the input is anything but a string, and 'Valid' if the given string is valid.
 * @param {string} input
 */
// FUNCTION TO CHECK IF GIVEN INPUT EXISTS. IF YES, IT RETURNS THE NECESSARY DATA
function checkIfExists(input) {
    results = [];

    // FOR LOOP TO GO THROUGH EVERY VALUE IN THE OBJECT
    for (i = 0; i < Object.keys(objs.symptoms).length; i++){

        // IF A GIVEN STRING CONSISTS IN THE SYMPTOM OBJECT'S NAME, ADD AN OBJECT CONSISTING OF IT'S PROPERTIES TO THE ARRAY
        if (processVal(objs.symptoms[i].name).includes(processVal(input))){
            results.push({name:objs.symptoms[i].name, isOrNot:objs.symptoms[i].isOrNot, description:objs.symptoms[i].description, url:objs.symptoms[i].url});
        }
        
        // ELSE PUSH A BOOLEAN FALSE VALUE
        else {
            results.push(false);
        }
    }

    
    // LOOP THROUGH THE RESULTS ARRAY
    for(i = 0; i<results.length; i++){

        // IF THE VALUE AT ANY POINT IN THE RESULTS ARRAY IS THE BOOLEAN VALUE 'false' THEN CONTINUE
        if(results[i] === false){
            continue;
        }
        // ELSE RETURN OBJECT
        else {
            return (results);
        }
    }
    return "Inexistent";   

}

// FUNCTION TO TEST IF CHECK IF EXISTS FUNCTION WORKS
function testCheckIfExists(input, expRes) {
    var result = checkIfExists(input);

    if(result === expRes) {
        outputCol = "green";
        outputVal = "==PASSED==";
    }
    else {
        outputCol = "red";
        outputVal = "xxFAILEDxx";
    }

    let opString = "Value tested: "+input+"  Expected result: "+expRes+" <span style='color: "+outputCol+"'>"+outputVal+"<br />";
    let msg = document.getElementById("test3resOp");
    msg.innerHTML +=opString;
}

// testCheckIfExists("Cold", )
testCheckIfExists("Vomitting", "Inexistent");