export type state = {
    content: React.ReactNode;
    visible: boolean;
};

export type action = {
    type: "show" | "hide";
    newContent?: React.ReactNode;
};