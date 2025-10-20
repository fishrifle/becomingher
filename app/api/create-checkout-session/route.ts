import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const { priceId, userId } = await req.json();

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      client_reference_id: userId,
      metadata: {
        userId,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
