export const dict = {
  en: {
    app: { name: 'Edget' },
    nav: { tutors: 'Tutors', packages: 'Packages', student: 'Student', teacher: 'Teacher', login: 'Login', logout: 'Logout', admin: 'Admin' },
    home: {
      heroTitle: 'Personalized in-person tutoring across Ethiopia',
      heroSubtitle: 'Connect with approved university students and graduates for high-quality local tutoring—tailored to your grade, subjects, and location.',
      studentCta: 'I am a student',
      teacherCta: 'I am a teacher',
      howItWorks: 'How it works',
      steps: {
        signUpTitle: '1. Sign up',
        signUpText: 'Students and teachers create accounts with basic details and documents.',
        verifyTitle: '2. Verification',
        verifyText: 'Teachers pay a small fee and the admin verifies documents and profiles.',
        bookTitle: '3. Book & Learn',
        bookText: 'Students browse tutors, pick a package, request sessions, and start learning.'
      },
      packages: 'Transparent monthly packages',
      choosePlan: 'Choose the plan that fits your schedule and goals.',
      packList: [
        { title: '4 sessions/week', detail: '2 hours each', price: '3000 ETB/month' },
        { title: '3 sessions/week', detail: '2 hours each', price: '2500 ETB/month' },
        { title: '3 sessions/week', detail: '1 hour each', price: '2000 ETB/month' }
      ]
    },
    pages: {
      common: {
        loading: 'Loading...',
        none: 'No items.',
        approve: 'Approve',
        reject: 'Reject',
        accept: 'Accept',
        deny: 'Deny',
        confirm: 'Confirm',
        reportIssue: 'Report issue',
        actions: 'Actions',
        quickLinks: 'Quick links',
        getStarted: 'Get started'
      },
      login: { title: 'Login', email: 'Email', password: 'Password', signIn: 'Sign in' },
      register: {
        student: {
          title: 'Student Registration',
          name: 'Full name', age: 'Age', gender: 'Gender', email: 'Email', password: 'Password', grade: 'Class/Grade',
          region: 'Region', city: 'City', kebele: 'Kebele', idFront: 'National ID Front', idBack: 'National ID Back', submit: 'Submit', submitting: 'Submitting...'
        },
        teacher: {
          title: 'Teacher Registration',
          name: 'Full name', age: 'Age', gender: 'Gender', email: 'Email', password: 'Password', university: 'University', department: 'Department', academicGrade: 'Academic Grade',
          region: 'Region', city: 'City', kebele: 'Kebele', photo: 'Photo', universityId: 'University ID', idFront: 'National ID Front', idBack: 'National ID Back', subjects: 'Subjects (comma separated)', preferredGrades: 'Preferred Grades (comma separated 1-12)', submit: 'Submit', submitting: 'Submitting...'
        }
      },
      tutors: {
        title: 'Browse Tutors',
        subtitle: 'Filter by subject, grade, or location to find the right match.',
        seePackages: 'See packages',
        filters: { subject: 'Subject', grade: 'Grade', region: 'Region', city: 'City' }
      },
      packages: { title: 'Packages' },
      dashboards: {
        admin: { title: 'Admin Dashboard', requests: 'Tutor Requests', payments: 'Payments', lead: 'Verify documents, approve tutors, manage payments, disputes, and session monitoring.' },
        student: { title: 'Student Dashboard', attendance: 'Weekly Attendance', uploadPayment: 'Upload payment', requestTutor: 'Request a tutor', lead: 'Browse tutors, request a package, upload payments, and confirm weekly attendance.' },
        teacher: { title: 'Teacher Dashboard', attendance: 'Weekly Attendance', payFee: 'Pay registration fee', requests: 'Requests', lead: 'Review incoming requests, accept/deny, and manage your schedule.' },
        items: {
          package: 'Package', amount: 'Amount', reference: 'Ref', viewProof: 'View proof', with: 'with', withStudent: 'with student'
        }
      },
      tutorDetail: {
        about: 'About',
        university: 'University',
        department: 'Department',
        academicGrade: 'Academic grade',
        subjects: 'Subjects',
        preferredGrades: 'Preferred grades',
        bookThisTutor: 'Book this tutor',
        bookNote: 'Choose a package and request available days and time from your dashboard.',
        requestTutor: 'Request a tutor'
      }
    },
    messages: {
      invalidCredentials: 'Invalid credentials',
      registrationSubmitted: 'Registration submitted!',
      registrationFailed: 'Failed to register',
      teacherRegistrationSubmitted: 'Registration submitted! Proceed to pay the 100 ETB fee on your dashboard once approved step opens.',
      paymentUploaded: 'Payment uploaded. Await admin verification.',
      paymentFailed: 'Failed to upload payment',
      attendanceSubmitted: 'Submitted',
      requestSubmitted: 'Request submitted!',
      requestFailed: 'Failed to submit request',
      feeUploaded: 'Fee uploaded. Await admin confirmation.',
      feeFailed: 'Failed to upload fee proof'
    }
  },
  am: {
    app: { name: 'እድገት (Edget)' },
    nav: { tutors: 'መምህራን', packages: 'ዕቅዶች', student: 'ተማሪ', teacher: 'አስተማሪ', login: 'መግቢያ', logout: 'መውጫ', admin: 'አስተዳዳሪ' },
    home: {
      heroTitle: 'በኢትዮጵያ ውስጥ የግል ትምህርት አገልግሎት',
      heroSubtitle: 'ከዩኒቨርሲቲ ተማሪዎች እና ተመራቂዎች ጋር እርስዎን የሚገናኝ ከፍተኛ ጥራት ያለው አካባቢያዊ ትምህርት — እንደ ክፍል ደረጃ እና ርዕስ የተስተካከለ።',
      studentCta: 'ተማሪ ነኝ',
      teacherCta: 'አስተማሪ ነኝ',
      howItWorks: 'እንዴት ይሰራል',
      steps: {
        signUpTitle: '1. መመዝገብ',
        signUpText: 'ተማሪዎችና አስተማሪዎች መረጃ እና ሰነዶችን በመሙላት መለያ ይፍጠሩ።',
        verifyTitle: '2. ማረጋገጥ',
        verifyText: 'አስተማሪዎች ትንሽ ክፍያ ይከፍላሉ እና አስተዳዳሪው ሰነዶችን እና መገለጫዎችን ያረጋግጣል።',
        bookTitle: '3. መዘጋጀት እና መማር',
        bookText: 'ተማሪዎች መምህራንን ይመርጣሉ፣ ዕቅድ ይመርጣሉ፣ ጥያቄ ያቀርባሉ እና ትምህርትን ይጀምራሉ።'
      },
      packages: 'ግልጽ ወርሃዊ ዕቅዶች',
      choosePlan: 'ከሰሌዳዎ እና ከግቦችዎ ጋር የሚስማማ ዕቅድ ይምረጡ።',
      packList: [
        { title: 'በሳምንት 4 ክፍለ-ትምህርት', detail: 'እያንዳንዱ 2 ሰዓት', price: '3000 ብር/ወር' },
        { title: 'በሳምንት 3 ክፍለ-ትምህርት', detail: 'እያንዳንዱ 2 ሰዓት', price: '2500 ብር/ወር' },
        { title: 'በሳምንት 3 ክፍለ-ትምህርት', detail: 'እያንዳንዱ 1 ሰዓት', price: '2000 ብር/ወር' }
      ]
    },
    pages: {
      common: {
        loading: 'በመጫን ላይ...',
        none: 'ምንም አልተገኘም።',
        approve: 'ማፅደቅ',
        reject: 'መቀስቀስ',
        accept: 'መቀበል',
        deny: 'መክደን',
        confirm: 'ማረጋገጥ',
        reportIssue: 'ችግኝ ማመልከት',
        actions: 'እርምጃዎች',
        quickLinks: 'ፈጣን አገናኞች',
        getStarted: 'ጀምር'
      },
      login: { title: 'መግቢያ', email: 'ኢሜይል', password: 'የይለፍ ቃል', signIn: 'መግባት' },
      register: {
        student: {
          title: 'የተማሪ መመዝገብ',
          name: 'ሙሉ ስም', age: 'ዕድሜ', gender: 'ጾታ', email: 'ኢሜይል', password: 'የይለፍ ቃል', grade: 'ክፍል/ደረጃ',
          region: 'ክልል', city: 'ከተማ', kebele: 'ቀበሌ', idFront: 'የመታወቂያ ካርድ ፊት', idBack: 'የመታወቂያ ካርድ ጀርባ', submit: 'ማስገባት', submitting: 'በመላክ ላይ...'
        },
        teacher: {
          title: 'የአስተማሪ መመዝገብ',
          name: 'ሙሉ ስም', age: 'ዕድሜ', gender: 'ጾታ', email: 'ኢሜይል', password: 'የይለፍ ቃል', university: 'ዩኒቨርሲቲ', department: 'ዲፓርትመንት', academicGrade: 'የስነ-ምግባር ደረጃ',
          region: 'ክልል', city: 'ከተማ', kebele: 'ቀበሌ', photo: 'ፎቶ', universityId: 'የዩኒቨርሲቲ መታወቂያ', idFront: 'የመታወቂያ ፊት', idBack: 'የመታወቂያ ጀርባ', subjects: 'ርዕሶች (በኮማ የተለየ)', preferredGrades: 'የሚመርጡ ክፍሎች (1-12 በኮማ)', submit: 'ማስገባት', submitting: 'በመላክ ላይ...'
        }
      },
      tutors: {
        title: 'መምህራን ይመልከቱ',
        subtitle: 'በርዕስ፣ በክፍል ወይም በአካባቢ ይቅርብ ጌጥ ያግኙ።',
        seePackages: 'ዕቅዶችን ይመልከቱ',
        filters: { subject: 'ርዕስ', grade: 'ክፍል', region: 'ክልል', city: 'ከተማ' }
      },
      packages: { title: 'ዕቅዶች' },
      dashboards: {
        admin: { title: 'የአስተዳዳሪ ዳሽቦርድ', requests: 'የመምህር ጥያቄዎች', payments: 'ክፍያዎች', lead: 'ሰነዶችን ያረጋግጡ፣ መምህራንን ያፅድቁ፣ ክፍያዎችን፣ ግጭቶችን እና የክፍለ-ትምህርት ክትትልን ያስተዳድሩ።' },
        student: { title: 'የተማሪ ዳሽቦርድ', attendance: 'የሳምንት መገኘት', uploadPayment: 'ክፍያ መጫን', requestTutor: 'መምህር መጠየቅ', lead: 'መምህራንን ይመልከቱ፣ ዕቅድ ይጠይቁ፣ ክፍያዎችን ይጫኑ እና የሳምንት መገኘትን ያረጋግጡ።' },
        teacher: { title: 'የአስተማሪ ዳሽቦርድ', attendance: 'የሳምንት መገኘት', payFee: 'የመመዝገብ ክፍያ መክፈል', requests: 'ጥያቄዎች', lead: 'የሚመጡ ጥያቄዎችን ይመርምሩ፣ ተቀብለው/ውድቅ ያድርጉ እና መርሃግብሮትዎን ያስተዳድሩ።' },
        items: {
          package: 'ዕቅድ', amount: 'መጠን', reference: 'ማመሳከሪያ', viewProof: 'ማስረጃ ተመልከት', with: 'ከ', withStudent: 'ከተማሪ'
        }
      },
      tutorDetail: {
        about: 'ስለ መምህሩ',
        university: 'ዩኒቨርሲቲ',
        department: 'ዲፓርትመንት',
        academicGrade: 'የስነ-ምግባር ደረጃ',
        subjects: 'ርዕሶች',
        preferredGrades: 'የሚመርጡ ክፍሎች',
        bookThisTutor: 'ይህን መምህር ይዘዙ',
        bookNote: 'ከዳሽቦርድዎ ዕቅድ ይምረጡ እና የተመረጡ ቀናትና ሰዓታት ይጠይቁ።',
        requestTutor: 'መምህር መጠየቅ'
      }
    },
   messages: {
     invalidCredentials: 'የተሳሳተ መረጃ',
     registrationSubmitted: 'መመዝገብ ተሳክቷል።',
     registrationFailed: 'መመዝገብ አልተሳካም',
     teacherRegistrationSubmitted: 'መመዝገብ ተሳክቷል። ከማፅደቅ በኋላ ከዳሽቦርድዎ 100 ብር ክፍያ ይክፈሉ።',
     paymentUploaded: 'ክፍያ ተጫኗል። የአስተዳዳሪ ማረጋገጫን ይጠብቁ።',
     paymentFailed: 'ክፍያ መጫን አልተሳካም',
     attendanceSubmitted: 'ተልኳል',
     requestSubmitted: 'ጥያቄ ተልኳል።',
     requestFailed: 'ጥያቄ መላክ አልተሳካም',
     feeUploaded: 'ክፍያ ተጫኗል። የአስተዳዳሪ ማረጋገጫን ይጠብቁ።',
     feeFailed: 'የክፍያ ማስረጃ መጫን አልተሳካም'
   }
 }
} as const

export type Lang = keyof typeof dict
