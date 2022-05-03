import { Request, Response } from "express";
import testService, { CreateTestData } from "../services/testService.js";
import nodemailer from "nodemailer";
import userService from "../services/userService.js";
import categoryService from "../services/categoryService.js";
import teacherDisciplineService from "../services/teacherDisciplineService.js";
import disciplineService from "../services/disciplineService.js";
import teacherService from "../services/teacherService.js";
import dotenv from "dotenv";
dotenv.config();

export async function updateViewCount(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  await testService.updateViewCount(id);

  res.sendStatus(204);
}

export async function create(req: Request, res: Response) {
  const test: CreateTestData = req.body;

  await testService.insert(test);

  res.sendStatus(201);

  async function main(
    email: string,
    testName: string,
    category: string,
    discipline: string,
    teacher: string
  ) {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER_EMAIL,
        pass: process.env.NODEMAILER_USER_PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"RepoProvas" <repoprovas@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Uma nova prova foi adicionada!", // Subject line
      text: `A seguinte prova foi adicionadas: ${teacher} ${category} - ${testName} (${discipline})`, // plain text body
      html: `<b>A seguinte prova foi adicionadas: ${teacher} ${category} - ${testName} (${discipline})</b>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

  const users = userService.findAll();
  const category = categoryService.findById(test.categoryId);
  const teacherDiscipline = teacherDisciplineService.findById(
    test.teacherDisciplineId
  );
  const discipline = disciplineService.findById(
    (await teacherDiscipline).disciplineId
  );
  const teacher = teacherService.findById((await teacherDiscipline).teacherId);

  (await users).map(async (user) =>
    main(
      user.email,
      test.name,
      (await category).name,
      (await discipline).name,
      (await teacher).name
    ).catch(console.error)
  );
}
