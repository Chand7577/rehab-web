




const home_info = [
    {
        heading: "Giving Patients",
        subHeading: "The Best Care",
        para1: "MagicNurf में, हम अपने मरीजों को सर्वोत्तम देखभाल प्रदान करने को सर्वोच्च प्राथमिकता देते हैं। हमारी समर्पित विशेषज्ञों की टीम व्यक्तिगत उपचार योजनाएँ तैयार करती है, जिसमें चिकित्सा सहायता, समग्र उपचार विधियाँ, और भावनात्मक मार्गदर्शन का समन्वय होता है। हमारा उद्देश्य यह सुनिश्चित करना है कि हर मरीज को उनकी उपचार यात्रा के दौरान संपूर्ण सहयोग, सम्मान, और आत्म-सशक्तिकरण का अनुभव हो।",
        para2: "At MagicNurf, we prioritize providing the best possible care to our patients. Our dedicated team of experts creates personalized treatment plans that incorporate medical support, holistic therapies, and emotional guidance. Our goal is to ensure that every patient experiences complete support, respect, and empowerment throughout their recovery journey.",
        imgSrc: "/src/assets/image-1.jpeg",
        btnRequired:false,
    },
    {
        heading: "Better Doctors",
        subHeading: "Best Care",
        para1: "MagicNurf में, हमारे अनुभवी और सहानुभूतिपूर्ण डॉक्टर असाधारण देखभाल प्रदान करने के लिए प्रतिबद्ध हैं। उनकी विशेषज्ञता और समर्पण के साथ, हम प्रत्येक मरीज की अनूठी जरूरतों के अनुसार व्यापक उपचार प्रदान करते हैं, जिससे तेजी से और अधिक प्रभावी पुनर्प्राप्ति सुनिश्चित होती है। बेहतर डॉक्टर का मतलब बेहतर देखभाल है, और यही हमारी आपको दी जाने वाली गारंटी है।",
        para2: "At MagicNurf, our experienced and compassionate doctors are committed to providing exceptional care. With their expertise and dedication, we offer comprehensive treatment tailored to each patient’s unique needs, ensuring faster and more effective recovery. Better doctors mean better care, and that’s our promise to you."
        ,
        imgSrc: "/src/assets/image-2.jpeg",
        btnRequired:true,
    },
    {
        heading: "Extra Curricular",
        subHeading: "Activities",
        para1: ["Celebrations of festivals from all religions.", "Weekend outings such as sports and movies as part of the rehabilitation process.", "Conducting family meetings and counseling guardians to help them cope with the trauma experienced by a serious victim of abuse."],
        para2: ["सभी धर्मों के त्योहारों का उत्सव मनाना।", "पुनर्वास प्रक्रिया के भाग के रूप में वीकेंड पर खेल और फिल्मों जैसी आउटिंग्स का आयोजन।", "परिवारिक बैठकें आयोजित करना और अभिभावकों को काउंसलिंग प्रदान करना ताकि वे नशे के गंभीर शिकार से गुज़र रहे व्यक्ति द्वारा अनुभव किए गए आघात को समझ सकें और उसका सामना कर सकें।"],
        imgSrc: "/src/assets/image-3.jpeg",
        btnRequired:false
    }

]


  const cards = [
    {
      titleEn: "Yoga and Meditation",
      
      descEn: "हमारे योग और ध्यान परामर्श कार्यक्रम आपकी मानसिक और शारीरिक तंदुरुस्ती को सशक्त बनाने के लिए डिज़ाइन किए गए हैं। इन सत्रों के माध्यम से, हम आपको तनाव कम करने, आंतरिक शांति प्राप्त करने और समग्र स्वास्थ्य में सुधार करने के लिए मार्गदर्शन करते हैं।",
      descHi: "Our yoga and meditation sessions are designed to promote physical fitness and mental peace. These practices help you achieve inner balance, improving your overall well-being.",
      videoUrl: "/src/assets/vid-1.mp4", // replace with real embed url
      hasMore: true,
    },
    {
      titleEn: "Indoor Activities",
     
      descEn: "हमारी इनडोर गतिविधियाँ आपके मानसिक और शारीरिक स्वास्थ्य को बनाए रखने के लिए विविध और रोचक विकल्प प्रदान करती हैं। ये गतिविधियाँ न केवल मनोरंजन का अवसर देती हैं, बल्कि आपकी पुनर्प्राप्ति यात्रा में सकारात्मक प्रभाव भी डालती हैं।",
      descHi: "Our indoor activities offer a variety of engaging options to maintain your mental and physical health. These activities not only provide entertainment but also have a positive impact on your recovery journey.",
      videoUrl: "/src/assets/vid-2.mp4",
      hasMore: false,
    },
    {
      titleEn: "Safety Skills",
    
      descEn: "हमारे केंद्रित प्रशिक्षण के साथ आग सुरक्षा में आवश्यक जानकारी सिखाते हैं। आपातकालीन परिस्थितियों से निपटने के लिए व्यावहारिक कौशल सीखें और सभी के लिए एक सुरक्षित वातावरण सुनिश्चित करें।",
      descHi: "Gain essential knowledge in fire safety with our focused training on using a fire extinguisher. Learn practical skills to handle emergencies confidently and ensure a safer environment for everyone.",
      videoUrl: "/src/assets/vid-3.mp4",
      hasMore: true,
    },
    {
      titleEn: "Safety Skills",
    
      descEn: "हमारा समूह परामर्श कार्यक्रम सामूहिक समर्थन और साझा अनुभवों के माध्यम से मानसिक और भावनात्मक विकास को बढ़ावा देता है. इसमें, आप समान संघर्षों से गुजर रहे अन्य व्यक्तियों के साथ जुड़ सकते हैं, जो आपकी यात्रा को समझने और सहयोग देने में मदद करते हैं।",
      descHi: "Our group counseling program fosters mental and emotional growth through collective support and shared experiences. Here, you can connect with others going through similar challenges, helping you feel understood and supported on your journey.",
      videoUrl: "/src/assets/vid-3.mp4",
      hasMore: true,
    }
  ]
export { home_info,cards }