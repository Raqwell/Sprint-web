enum SprintStatus {
    IN_PROGRESS = "In progress",
    PAUSED = "Paused",
    CANCELLED = "Cancelled",
    COMPLETED = "Completed"
}

enum DurationUnit {
    SECOND = "SECOND (s)",
    MINUTE = "MINUTE (m)",
    HOUR = "HOUR (h)"
}

export type SprintType = {
    name: string;
    duration: number;
    unit: DurationUnit;
    status: SprintStatus;
}

export interface Sprint {
    sprintType: SprintType;
    progress: number;
    description: string;
    user: string;
    notify: boolean;
    createdAt: Date;
    started: Date;
    finishedAt: Date;
}
