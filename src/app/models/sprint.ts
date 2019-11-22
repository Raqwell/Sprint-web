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

export class SprintType {
    name: string;
    duration: number;
    unit: number;
    status: number;

    constructor() {}
}

export class Sprint {
    sprintType: SprintType;
    progress: number;
    description: string;
    user: string;
    notify: boolean;
    createdAt: number;
    startedAt: number;
    finishedAt: number;

    constructor() {}
}
