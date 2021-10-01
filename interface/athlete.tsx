let athlete = {
    name: "Luis",
    age: 22,
}
//class to save data to localStorage with help of readStore.js
class memberInfo {
    Day: String;
    Time: String;
    Exercise: String;
    Weight: String;
    Reps: String;
    constructor(theDay: string, theTime: string, theExercise: string, theWeight: string, theReps: string) {
        this.Day = theDay
        this.Time = theTime;
        this.Exercise = theExercise;
        this.Weight = theWeight;
        this.Reps = theReps;
    }
}


