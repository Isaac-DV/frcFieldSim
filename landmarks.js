var landmarks = {
    closeHatchPosition: new Pose2d(new Translation2d(48.0 + 166.57, 27.44 - 10.0 - 162.0), new Rotation2d(-30.0)),
    farHatchPosition: new Pose2d(new Translation2d(229.13 + 14.71, 27.44 - 10.0 - 162.0), new Rotation2d(-150.0)),
    humanLoaderPosition: new Pose2d(new Translation2d(0.0, 25.72 - 162.0), new Rotation2d(0.0)),
    autoBallPosition: new Pose2d(new Translation2d(48.0 - 4.0 - kBallRadius, 97.0 - (3.0*kBallRadius) - 162.0), new Rotation2d(-45.0)),
    rocketPortPosition: new Pose2d(new Translation2d(229.13, 27.44 - 162.0), new Rotation2d(-90.0)),
    closeShipPosition: new Pose2d(new Translation2d(260.8, -28.87), new Rotation2d(90.0)),
    midShipPosition: new Pose2d(new Translation2d(282.55 + 1.0, -28.87), new Rotation2d(90.0)),
    farShipPosition: new Pose2d(new Translation2d(304.3, -28.87), new Rotation2d(90.0))
}

var kRobotHalfLength = robotOpts.width / 2;
var kRobotHalfWidth = robotOpts.height / 2;

var fieldPoses = {
    autoStartingPose: new Pose2d(new Translation2d(48.0 + kRobotHalfLength, 97.0 + kRobotHalfWidth - 162.0), new Rotation2d(-90)),
    closeHatchScoringPose: landmarks.closeHatchPosition.transformBy(new Pose2d(new Translation2d(-kRobotHalfLength - 3.5, -2.0), new Rotation2d(0))),
    farHatchScoringPose: landmarks.farHatchPosition.transformBy(new Pose2d(new Translation2d(-kRobotHalfLength - 5.0, 8.0), new Rotation2d(0))),
    humanLoaderPose: landmarks.humanLoaderPosition.transformBy(new Pose2d(new Translation2d(kRobotHalfLength - 4.0, 2.0), new Rotation2d(0))),
    ballIntakePose: new Pose2d(landmarks.autoBallPosition.transformBy(new Pose2d(new Translation2d(Constants.kRobotHalfLength + 9.0, 0.0), new Rotation2d(0))).translation, new Rotation2d(0)),
    portScoringPose: landmarks.rocketPortPosition.transformBy(new Pose2d(new Translation2d(-Constants.kRobotHalfLength - 6.0, 0.0), new Rotation2d(0))),
    farShipScoringPose: landmarks.farShipPosition.transformBy(new Pose2d(new Translation2d(-Constants.kRobotHalfLength - 4.0, 0.0), new Rotation2d(0))),
    midShipScoringPose: landmarks.midShipPosition.transformBy(new Pose2d(new Translation2d(-Constants.kRobotHalfLength - 4.0, 0.0), new Rotation2d(0))),
    closeShipScoringPose: landmarks.closeShipPosition.transformBy(new Pose2d(new Translation2d(-Constants.kRobotHalfLength - 4.0, 6.0), new Rotation2d(0)))
}

function importPath(text) {
    var lines = text.split('\n');
    console.log(lines[0]);

    var line;
    for (line of lines) {
        if (line.includes("waypoints.add")) {
            
        }
    }
}

function getClipboard() {
    navigator.clipboard.readText()
    .then(text => {
        console.log('Pasted content: ', text);
        importPath(text);
    })
    .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
    });
}