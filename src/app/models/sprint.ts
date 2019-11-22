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

export interface SprintType {
    name: string;
    duration: number;
    unit: number;
    status: number;
}

export interface Sprint {
    sprintType: SprintType;
    progress: number;
    description: string;
    user: string;
    notify: boolean;
    createdAt: Date;
    startedAt: Date;
    finishedAt: Date;
}
