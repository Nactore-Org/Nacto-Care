import 'package:flutter/material.dart';
import 'package:nactocare/screens/ThemeProvider/theme_provider.dart';
import 'package:nactocare/screens/main_page.dart';
import 'package:nactocare/screens/register_screen.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Flutter Demo",
      themeMode: ThemeMode.system,
      theme: MyThemes.lightTheme,
      darkTheme: MyThemes.darkTheme,
      // debugShowCheckedModeBanner: false,
      home: RegisterScreen(),
    );
  }
}
