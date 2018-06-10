{
  let item2 = 0
  let item1 = 0
  let item = 0
  
  BitRobot.motor(BBMotor.Left, 0)
  BitRobot.motor(BBMotor.Right, 0)
  BitRobot.motor(BBMotor.Left, 1000)
  BitRobot.motor(BBMotor.Right, -1000)
  BitRobot.motor(BBMotor.All, 0)
  BitRobot.motor(BBMotor.All, 512)
  BitRobot.buzz(BBBuzzONOFF.buzzOn)
  BitRobot.buzz(BBBuzzONOFF.buzzOFF)

  item = BitRobot.readLine(BBLineSensor.Left)
  item1 = BitRobot.readLight(BBLightSensor.Left)
  item2 = BitRobot.sonar(BBPingUnit.Centimeters)

  BitRobot.neoBrightness(30)
  BitRobot.neoSetColor(BBPixelColors.Indigo)
  BitRobot.neoShow()
}
