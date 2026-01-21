import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
})

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  priority: text("priority").notNull().default("normal"),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
})

export const pageVisits = pgTable("page_visits", {
  id: serial("id").primaryKey(),
  path: text("path").notNull(),
  userAgent: text("user_agent"),
  ip: text("ip"),
  referer: text("referer"),
  timestamp: timestamp("timestamp").notNull(),
})

export const articleViews = pgTable("article_views", {
  id: serial("id").primaryKey(),
  articleId: integer("article_id").notNull(),
  articleSlug: text("article_slug").notNull(),
  ip: text("ip"),
  userAgent: text("user_agent"),
  timestamp: timestamp("timestamp").notNull(),
})

export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  ip: text("ip"),
  userAgent: text("user_agent"),
  firstVisit: timestamp("first_visit").notNull(),
  lastActivity: timestamp("last_activity").notNull(),
  pageCount: integer("page_count").notNull().default(1),
})
