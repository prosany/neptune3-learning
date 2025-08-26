export type CoreState = {
  isModalOpen: boolean;
  modalType: string;
  onBoarding: {
    learningPreferences: string;
    learningMethods: string;
    learningGoals: string[];
    learningTime: string;
  };
  isFinished: boolean;
  getStarted: boolean;
  chatPrompt: string;
};
